export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
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

export const customerSignUp = newCustomer => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newCustomer.email, newCustomer.password)
      .then(resp => {
        return firestore
          .collection("CustomerProfile")
          .doc(resp.user.uid)
          .set({
            firstName: newCustomer.firstName,
            lastName: newCustomer.lastName,
            zipCode: newCustomer.zipCode,
            initials: newCustomer.firstName[0] + newCustomer.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const contractorSignUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("contractorProfile")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            zipCode: newUser.zipCode,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const fetchProjects = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    return firestore
      .collection("projects")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          let items = doc.data();

          /* Make data suitable for rendering */
          items = JSON.stringify(items);
          dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: items });
          /* Update the components state with query result */
          // this.setState({ items : items })
        });
      });
  };
};
