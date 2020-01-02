import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";
import { fetchContractorProfileAction } from "../actions/contractorProfileActions";
import { fetchContractorProfileAPI } from "../actions/FirebaseApiCalls";
import {
  cleanInput,
  startEndDateValidation,
  isFormValid,
  genericFieldValidation
} from "./sharedReducerFunctions";
import { digitsAndDashesOnlyRegex } from "../../../utils/regex";
import { formatPhoneNumberWithDashes } from "../../../utils/stringUtils";
import { validatePhone } from "../../../utils/validationUtils";
const initialState = {
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
  years: "",
  bkcheck: false,
  basicinfochk: false,
  companyName: "",
  history: "",
  bids: "",
  update: false,

  profile: "",
  validForm: false,
  errors: [],
  errorMessage: {}
};

export default function contractorProfileReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_PROFILE: {
      return {
        ...state
      };
    }
    case ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_PROFILE_SUCCESS: {
      return {
        ...state
      };
    }
    case ACTIONS.CONTRACTOR_GROUP.UPDATE_CONTRACTOR_PROFILE_VALUE: {
      //copy the piece of locationstate for updating:
      let formStateCopy = { ...state };
      let oldFormItem = formStateCopy[action.payload.id]; //keep previous value for formatting and validation
      let formItem = { ...formStateCopy[action.payload.id] };

      //add the input to the object:
      formItem.value = action.payload.value;

      //clean the object value:
      formItem = cleanInput(formItem, true); //true = ONLY strip leading spaces. prevent bugs in onChange

      //autoformat this form field if neccessary:
      formItem = profileFieldFormatting(
        action.payload.id,
        formItem,
        oldFormItem
      );

      //validate this form field object:
      formItem = profileFieldValidation(action.payload.id, formItem);

      //put mutated object back into state copy:
      formStateCopy[action.payload.id] = formItem;

      //CHECK START AND END DATES FOR ERRORS:
      // if (["startdate", "enddate"].includes(action.payload.id)) {
      //   formStateCopy = startEndDateValidation(
      //     formStateCopy,
      //     "startdate",
      //     "enddate"
      //   );
      // }

      //return state
      return formStateCopy;
    }
    case ACTIONS.CONTRACTOR_GROUP.ADD_CONTRACTOR_PROFILE_PROFILE_FAIL: {
      return {
        ...state
      };
    }

    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE: {
      return {
        ...state
      };
    }
    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_SUCCESS: {
      return {
        ...state
      };
    }
    case ACTIONS.CONTRACTOR_GROUP.FETCH_CONTRACTOR_PROFILE_FAIL: {
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
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
