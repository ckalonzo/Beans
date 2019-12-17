//memberShip
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";
export const CARTTOTALITEMS = "CARTTOTALITEMS";

export const FORM_FIELD_TYPES = {
  TEXTINPUT: "textinput",
  TEXTAREA: "textarea",
  SELECT: "select",
  RADIO_GROUP: "radioGroup",
  CHECKBOX: "datePicker"
};

export const ACTIONS = {
  PROFILE_GROUP: {
    // Create Profile
    CREATE_CUSTOMER_PROFILE_START: "CREATE_CUSTOMER_PROFILE_START",
    CREATE_CUSTOMER_PROFILE_SUCCESS: "CREATE_CUSTOMER_PROFILE_SUCCESS",
    CREATE_CUSTOMER_PROFILE_ERR: "CREATE_CUSTOMER_PROFILE_ERR",
    SUBMIT_CUSTOMER_PROFILE: "SUBMIT_CUSTOMER_PROFILE",

    //Update CUSTOMER_PROFILE
    UPDATE_CUSTOMER_PROFILE_START: "UPDATE_CUSTOMER_PROFILE_START",
    UPDATE_CUSTOMER_PROFILE_SUCCESS: "UPDATE_CUSTOMER_PROFILE_SUCCESS",
    UPDATE_CUSTOMER_PROFILE_ERR: "UPDATE_CUSTOMER_PROFILE_ERR",
    UPDATE_FULL_CUSTOMER_PROFILE: "UPDATE_FULL_CUSTOMER_PROFILE",
    UPDATE_CUSTOMER_PROFILE_VALUE: "UPDATE_CUSTOMER_PROFILE_VALUE",

    //FETCH Customer Profile
    FETCH_CUSTOMER_PROFILE: "FETCH_CUSTOMER_PROFILE",
    FETCH_CUSTOMER_PROFILE_SUCCESS: "FETCH_CUSTOMER_PROFILE_SUCCESS",
    FETCH_CUSTOMER_PROFILE_FAIL: "FETCH_CUSTOMER_PROFILE_FAIL",

    SUBMIT_PROFILE: "SUBMIT_PROFILE",

    //VALIDATING
    BEGIN_VALIDATING_PROFILE_VALUE: "BEGIN_VALIDATING_PROFILE_VALUE"
  },
  PROJECTS_GROUP: {
    //Fetch All Projects
    FETCH_PROJECTS: "FETCH_PROJECTS",
    FETCH_PROJECTS_SUCCESS: "FETCH_PROJECTS_SUCCESS",
    FETCH_PROJECTS_FAIL: "FETCH_PROJECTS_FAIL",

    //Fetch My Projects
    FETCH_MY_PROJECTS: "FETCH_MY_PROJECTS",
    FETCH_MY_PROJECTS_SUCCESS: "FETCH_MY_PROJECTS_SUCCESS",
    FETCH_MY_PROJECTS_FAIL: "FETCH_MY_PROJECTS_FAIL",
    DELETE_PROJECT_START: "DELETE_PROJECT_START",
    DELETE_PROJECT_SUCCESS: "DELETE_PROJECT_SUCCESS",
    DELETE_PROJECT_FAIL: "DELETE_PROJECT_FAIL"
  },
  BIDS_GROUP: {
    //FETCH BIDS
    FETCH_BIDS: "FETCH_BIDS",
    FETCH_BIDS_SUCCESS: "FETCH_BIDS_SUCCESS",
    FETCH_BIDS_FAIL: "FETCH_BIDS_FAIL",

    //Bids

    UPDATE_BID_START: "UPDATE_BID_START",
    UPDATE_BID_SUCCESS: "UPDATE_BID_SUCCESS",
    UPDATE_BID_ERR: "UPDATE_BID_ERR",

    //Add
    ADD_BID_START: "ADD_BID_START",
    ADD_BID_SUCCESS: "ADD_BID_SUCCESS",
    ADD_BID_ERR: "ADD_BID_ERR"
  },
  CONTRACTOR_GROUP: {
    //Fetch Contractor Profile
    FETCH_CONTRACTOR_PROFILE: "FETCH_CONTRACTOR_PROFILE",
    FETCH_CONTRACTOR_PROFILE_SUCCESS: "FETCH_CONTRACTOR_PROFILE_SUCCESS",
    FETCH_CONTRACTOR_PROFILE_FAIL: "FETCH_CONTRACTOR_PROFILE_FAIL",

    //Update CONTRACTOR_PROFILE
    UPDATE_CONTRACTOR_PROFILE_START: "UPDATE_CONTRACTOR_PROFILE_START",
    UPDATE_CONTRACTOR_PROFILE_SUCCESS: "UPDATE_CONTRACTOR_PROFILE_SUCCESS",
    UPDATE_CONTRACTOR_PROFILE_ERR: "UPDATE_CONTRACTOR_PROFILE_ERR",
    UPDATE_FULL_CONTRACTOR_PROFILE: "UPDATE_FULL_CONTRACTOR_PROFILE",
    UPDATE_CONTRACTOR_PROFILE_VALUE: "UPDATE_CONTRACTOR_PROFILE_VALUE",
    //Contractor Registration
    CONTRACTOR_REGISTRATION: "CONTRACTOR_REGISTRATION",
    ADD_BASIC_INFO: "ADD_BASIC_INFO",
    ADD_SSN: "ADD_SSN"
  },
  NOTIFICATIONS: {
    //Fetch Notifications
    FETCH_NOTIFICATIONS: "FETCH_NOTIFICATIONS",
    FETCH_NOTIFICATIONS_SUCCESS: "FETCH_NOTIFICATIONS_SUCCESS",
    FETCH_NOTIFICATIONS_FAIL: "FETCH_NOTIFICATIONS_FAIL"
  },

  STEPS: {
    NEXT_STEP: "NEXT_STEP",
    PREVIOUS_STEP: "PREVIOUS_STEP"
  }
};
