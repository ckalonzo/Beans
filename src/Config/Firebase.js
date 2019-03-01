import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDTAvQ7pNF1lOv54yf9CkGJBRZQ_bgyHS8",
  authDomain: "messaging-app-93c7b.firebaseapp.com",
  databaseURL: "https://messaging-app-93c7b.firebaseio.com",
  projectId: "messaging-app-93c7b",
  storageBucket: "messaging-app-93c7b.appspot.com",
  messagingSenderId: "71275684215"
};
firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
})





export default firebase;