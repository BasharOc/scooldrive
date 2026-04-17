import { initialRegistrationState } from "./registrationInitialState";

export const registrationActionTypes = {
  SET_STEP: "SET_STEP",
  SET_FORM_DATA: "SET_FORM_DATA",
  SET_ERRORS: "SET_ERRORS",
  SET_FRIEND_DISCOUNT: "SET_FRIEND_DISCOUNT",
  SET_FRIEND_NAME: "SET_FRIEND_NAME",
  MARK_FRIEND_SUBMITTED: "MARK_FRIEND_SUBMITTED",
};

export function registrationReducer(state, action) {
  switch (action.type) {
    case registrationActionTypes.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case registrationActionTypes.SET_FORM_DATA:
      return {
        ...state,
        formData:
          typeof action.payload === "function"
            ? action.payload(state.formData)
            : action.payload,
      };

    case registrationActionTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case registrationActionTypes.SET_FRIEND_DISCOUNT:
      return {
        ...state,
        isFriendDiscount: action.payload,
      };

    case registrationActionTypes.SET_FRIEND_NAME:
      return {
        ...state,
        friendName: action.payload,
      };

    case registrationActionTypes.MARK_FRIEND_SUBMITTED:
      return {
        ...state,
        isSubmitted: true,
      };

    default:
      return state || initialRegistrationState;
  }
}

