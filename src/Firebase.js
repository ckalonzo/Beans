import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDTAvQ7pNF1lOv54yf9CkGJBRZQ_bgyHS8",
    authDomain: "messaging-app-93c7b.firebaseapp.com",
    databaseURL: "https://messaging-app-93c7b.firebaseio.com",
    projectId: "messaging-app-93c7b",
    storageBucket: "messaging-app-93c7b.appspot.com",
    messagingSenderId: "71275684215"
};

export const firebaseApp = firebase.initializeApp(config); 