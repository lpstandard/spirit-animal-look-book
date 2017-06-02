import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA5yoVQg2hPhO0Y2dQu8yltS2vZd2SlTAg",
    authDomain: "social-animals-3f774.firebaseapp.com",
    databaseURL: "https://social-animals-3f774.firebaseio.com",
    projectId: "social-animals-3f774",
    storageBucket: "social-animals-3f774.appspot.com",
    messagingSenderId: "351725859956"
  };
  firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
