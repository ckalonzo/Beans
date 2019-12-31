import { ACTIONS } from "./../actions/actionTypes/ta-actionTypes";
import { fetchContractorProfileAction } from "../actions/contractorProfileActions";
import { fetchContractorProfileAPI } from "../actions/FirebaseApiCalls";
import { digitsAndDashesOnlyRegex } from "../../../utils/regex";
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
  companyName: "Lucy Goosie",
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
