import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDN81mcDqPQ3ZBcNZtBz_-Fg5ZRw6zbsRI",
    authDomain: "vue-firebase-sites-67655.firebaseapp.com",
    projectId: "vue-firebase-sites-67655",
    storageBucket: "vue-firebase-sites-67655.appspot.com",
    messagingSenderId: "224329665548",
    appId: "1:224329665548:web:1f560cc718b9994f3d7229"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)


  //init firestore service
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp}