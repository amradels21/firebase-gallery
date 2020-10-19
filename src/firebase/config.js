import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKdsGooWLMIPcZ0cWcluQM_iMkGQnslds",
    authDomain: "fire-gram2020.firebaseapp.com",
    databaseURL: "https://fire-gram2020.firebaseio.com",
    projectId: "fire-gram2020",
    storageBucket: "fire-gram2020.appspot.com",
    messagingSenderId: "993031810050",
    appId: "1:993031810050:web:2fc648f4525b3c54a38b1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectFireStore, projectStorage, timestamp};