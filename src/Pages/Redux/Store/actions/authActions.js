import { ACTIONS } from "./actionTypes/ta-actionTypes";

export const signInAction = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: ACTIONS.PROFILE_GROUP.LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ACTIONS.PROFILE_GROUP.LOGIN_ERROR, err });
      });
  };
};

export const signOutAction = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const customerSignUpAction = newCustomer => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newCustomer.email, newCustomer.password)
      .then(resp => {
        return firestore
          .collection("customerProfile")
          .doc(resp.user.uid)
          .set({
            firstName: newCustomer.firstName,
            lastName: newCustomer.lastName,
            zipCode: newCustomer.zipCode,
            initials: newCustomer.firstName[0] + newCustomer.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: ACTIONS.PROFILE_GROUP.CUSTOMER_SIGNUP_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: ACTIONS.PROFILE_GROUP.CUSTOMER_SIGNUP_FAIL, err });
      });
  };
};

export const contractorSignUpAction = newUser => {
  console.log("sign up contractor");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("contractor")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            zipCode: newUser.zipCode,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch(
          { type: ACTIONS.CONTRACTOR_GROUP.CONTRACTOR_SIGNUP_SUCCESS },
          console.log("sign up contractor success")
        );
      })
      .catch(err => {
        dispatch({
          type: ACTIONS.CONTRACTOR_GROUP.CONTRACTOR_SIGNUP_FAIL,
          err
        });
      });
  };
};

export const forgotPasswordAction = email => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    let actionCodeSettings = {};

    firebase
      .auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .then(function(data) {
        dispatch({
          type: ACTIONS.EMAIL.RESET_EMAIL_LINK_SENT,
          authError: "Email link has been sent",
          resetPassword: true
        });
      })
      .catch(function(data) {
        dispatch({
          type: ACTIONS.EMAIL.RESET_EMAIL_LINK_SENT_FAIL,
          authError: data.message,
          resetPassword: false
        });
      });
  };
};
