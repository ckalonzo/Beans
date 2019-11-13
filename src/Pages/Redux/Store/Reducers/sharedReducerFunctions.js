import moment from "moment";

import { cleanString, truncateString } from "../../../utils/stringUtils";
import { stripInvalidChars } from "../../../utils/regex";
import { FORM_FIELD_TYPES } from "../../../Redux/Store/actions/actionTypes/ta-actionTypes";

//removes invalid characters, runs specified regex, then trims and truncates input string
export const cleanInput = (formItem, trimLeadingSpacesOnly = false) => {
  //remove invalid characters:
  if (formItem.value) {
    formItem.value = stripInvalidChars(formItem.value);

    //run any specified regex on the object:
    formItem.value =
      "regex" in formItem ? formItem.regex(formItem.value) : formItem.value;

    //this should only get triggered on blur, so it will strip leading AND trailing spaces
    formItem.value = truncateString(
      cleanString(formItem.value),
      formItem.maxLength
    );
  }
  return formItem;
};

//check that required fields contain value
export const genericFieldValidation = formItem => {
  //catch all validation for required fields:
  if ("shouldValidate" in formItem && formItem.shouldValidate) {
    if ("required" in formItem && formItem.required) {
      //required: checkbox validation
      if ("type" in formItem && formItem.type === FORM_FIELD_TYPES.CHECKBOX) {
        formItem.error = !formItem.value
          ? formItem.label + "is required"
          : null;
      }

      //required textfield, select validation:
      else {
        let minLength = 1;
        let errorMessage = formItem.label + "is required";
        if ("minLength" in formItem && formItem.minLength) {
          minLength = parseInt(formItem.minLength);
          errorMessage = "Enter" + minLength + "or more characters";
        }

        //if error key doesn't exist, it will be created. This is OK since the field is required
        formItem.error =
          !formItem.value || formItem.value.length < minLength
            ? errorMessage
            : null;
      }
    }
  }
  return formItem;
};

// start end Date validations

export const startEndDateValidation = (
  locationState,
  startDateId,
  enDateId
) => {
  //copy the pieces of locationstate for validating:
  let start = { ...locationState[startDateId] };
  let end = { ...locationState[endDateId] };

  let startDate = moment(start.value, "MM/DD/YYYY"); //.toDate();
  let endDate = moment(end.value, "MM/DD/YYYY"); //.toDate();

  if (enDateId.isBefore(startDate)) {
    start.error = "Start date must be before the end date.";
    end.error = "End date must be after start date.";
  } else if (endDate.isAfter(moment(start).add(1, "year"))) {
    start.error = null;
    end.error = "End date should be less than 1 year";
  }
  locationState[startDateId] = start;
  locationState[endDateId] = end;

  return locationState;
};

//checks entire form to see if there any unresolved validation errors:
export const isFormValid = formState => {
  //check for errors:
  let errorCount = 0;
  for (let key in formState) {
    let formItem = { ...formState[key] };
    if ("error" in formItem) {
      if (formItem.error) {
        errorCount++;
      }
    }
  }
  return errorCount <= 0;
};
