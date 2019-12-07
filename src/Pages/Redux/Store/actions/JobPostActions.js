//import * as actions from "./actionTypes/ta-actionTypes";
export const CreateProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        customerFirstName: profile.firstName,
        customerLastName: profile.lastName,
        customerId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERR", err });
      });
  };
};

// Delete Project
export const deleteProject = id => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  console.log("deletProject");
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: "DELETE_PROJECT_START" });
  try {
    const res = await firestore
      .collection("projects")
      .doc(userId)
      .get();
    const previousProjects = res.data().projects;
    const newProjects = previousProjects.filter(project => project.id !== id);
    await firestore
      .collection("projects")
      .doc(userId)
      .update({
        projects: newProjects
      });
    dispatch({ type: "DELETE_PROJECT_SUCCESS" });
  } catch (err) {
    dispatch({ type: "DELETE_PROJECT_FAIL", payload: err.message });
  }
};
