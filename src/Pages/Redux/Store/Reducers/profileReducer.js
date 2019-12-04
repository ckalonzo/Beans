import { PROFILE_GROUP } from "../actions/actionTypes/ta-actionTypes";
import { digitsAndDashesOnlyRegex } from "../../../utils/regex";
import {
  cleanInput,
  startEndDateValidation,
  isFormValid,
  genericFieldValidation
} from "./sharedReducerFunctions";
import { formatPhoneNumberWithDashes } from "../../../utils/stringUtils";
import { validatePhone } from "../../../utils/validationUtils";
import cloneDeep from "lodash";
const initState = {
  firstName: {
    label: "First Name",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 45
  },
  lastName: {
    label: "Last Name",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 120
  },

  email: {
    label: "Email",
    value: "",
    required: false,
    shouldValidate: false,
    error: null,
    maxLength: 255
  },
  phone: {
    label: "Phone (XXX-XXX-XXXX)",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 12,
    regex: digitsAndDashesOnlyRegex
  },
  address1: {
    label: "Street Address",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 100
  },
  address2: {
    label: "Street Address 2",
    value: "",
    required: false,
    shouldValidate: false,
    error: null,
    maxLength: 100
  },
  city: {
    label: "City",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 50
  },
  businessState: {
    type: "select",
    label: "Select State",
    value: "",
    required: true,
    shouldValidate: false,
    error: null
  },
  zip: {
    label: "Zip Code (12345)",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 5,
    regex: digitsAndDashesOnlyRegex
  },
  rating: "4.5",
  reviews: [{ title: "Testing 123", text: "Brandon Was great!!!" }],
  skills: [],
  activeMember: "",
  bio: {
    type: "textarea",
    label: "Bio",
    value: "",
    required: true,
    shouldValidate: false,
    error: null,
    maxLength: 1500
  },
  numberOfJobs: "3000",
  typeOfJobs: {
    type: "select",
    label: "Select Service",
    value: "",
    required: true,
    shouldValidate: false,
    error: null
  },
  years: "10",
  bkcheck: false,
  basicinfochk: false,
  companyName: "Lucy Goosie",
  history: "",
  bids: "",
  update: false,

  profile: "",
  validForm: false,
  errors: [],
  errorMessage: {}
};

const ProfileReducer = (profile = initState, action) => {
  if (action.type === PROFILE_GROUP.SUBMIT_PROFILE) {
    //make a copy of the form state:
    let formStateCopy = { ...profile };

    for (let key in formStateCopy) {
      //keep previous value for formatting and validating needs:
      let oldFormItem = formStateCopy[key];

      //operate on an item copy, not the original
      let formItem = { ...formStateCopy[key] };

      //clean the object value:
      formItem = cleanInput(formItem);

      //autoformat this form field if neccessary:
      formItem = profileFieldFormatting(key, formItem, oldFormItem);

      //trip all the validation flags:
      if ("shouldValidate" in formItem) {
        formItem.shouldValidate = true;
      }

      //validate the form field object:
      formItem = profileFieldValidation(key, formItem);

      //put the mutated object back into the stte copy:
      formStateCopy[key] = formItem;
    }

    //check start and end dates for errors:
    formStateCopy = startEndDateValidation(
      formStateCopy,
      "startdate",
      "enddate"
    );

    //check for errors:
    if (isFormValid(formStateCopy)) {
      //TODO:if there are no errors, kick off service call here
      console.log("form validated: submit profile to firebase");
    }
    return formStateCopy;
  } else if (action.type === PROFILE_GROUP.UPDATE_PROFILE_VALUE) {
    //copy the piece of locationstate for updating:
    let formStateCopy = { ...profile };
    let oldFormItem = formStateCopy[action.payload.id]; //keep previous value for formatting and validation
    let formItem = { ...formStateCopy[action.payload.id] };

    //add the input to the object:
    formItem.value = action.payload.value;

    //clean the object value:
    formItem = cleanInput(formItem, true); //true = ONLY strip leading spaces. prevent bugs in onChange

    //autoformat this form field if neccessary:
    formItem = profileFieldFormatting(action.payload.id, formItem, oldFormItem);

    //validate this form field object:
    formItem = profileFieldValidation(action.payload.id, formItem);

    //put mutated object back into state copy:
    formStateCopy[action.payload.id] = formItem;

    //CHECK START AND END DATES FOR ERRORS:
    if (["startdate", "enddate"].includes(action.payload.id)) {
      formStateCopy = startEndDateValidation(
        formStateCopy,
        "startdate",
        "enddate"
      );
    }

    //return state
    return formStateCopy;
  } else if (action.type === PROFILE_GROUP.BEGIN_VALIDATING_PROFILE_VALUE) {
    let formStateCopy = { ...profile };
    let oldFormItem = formStateCopy[action.payload.id]; //keep previous value for formatting and validation
    let formItem = { ...formStateCopy[action.payload.id] };

    //clean the object value:
    formItem = cleanInput(formItem);

    //autoformat this form field if neccessary:
    formItem = profileFieldFormatting(action.payload.id, formItem, oldFormItem);

    if ("shouldValidate" in formItem) {
      formItem.shouldValidate = true;
    }

    //validate this form field object
    formItem = profileFieldValidation(action.payload.id, formItem);

    //put mutated object back into state copy:
    formStateCopy[action.payload.id] = formItem;

    //check start and end dates for errors
    if (["startdate", "enddate"].includes(action.payload.id)) {
      formStateCopy = startEndDateValidation(
        formStateCopy,
        "startdate",
        "enddate"
      );
    }

    //return state
    return formStateCopy;
  }
  //else
  return initState;
};

const profileFieldFormatting = (id, formItem, oldFormItem) => {
  if (["phone"].includes(id)) {
    formItem.value = formatPhoneNumberWithDashes(
      formItem.value,
      oldFormItem.value
    );
  }
  return formItem;
};

const profileFieldValidation = (id, formItem) => {
  //redundant check to  prevent validations from running when not needed:
  if ("shouldValidate" in formItem && formItem.shouldValidate) {
    if ("required" in formItem && formItem.required) {
      //unneccessary double check
      //generic validation:
      formItem = genericFieldValidation(formItem);

      //specific field validations:
      if (["phone"].includes(id)) {
        formItem.error = validatePhone(formItem.value);
      }
    }
  }
  return formItem;
};

export default ProfileReducer;
