 
import firebase from 'firebase'
import firestore from 'firebase/firestore'
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyChtuMzCQ0RUcPX47JiF2FPNMi8EGM7NF4",
    authDomain: "smoothies-c8845.firebaseapp.com",
    databaseURL: "https://smoothies-c8845.firebaseio.com",
    projectId: "smoothies-c8845",
    storageBucket: "smoothies-c8845.appspot.com",
    messagingSenderId: "406655539897"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  

  // export firestore database
  export default firebaseApp.firestore()