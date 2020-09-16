import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpRu2Iy6C3Xlk7JPIOh-RCOi1_Rjp_oXU",
    authDomain: "devmedia-fbclone.firebaseapp.com",
    databaseURL: "https://devmedia-fbclone.firebaseio.com",
    projectId: "devmedia-fbclone",
    storageBucket: "devmedia-fbclone.appspot.com",
    messagingSenderId: "112304711239",
    appId: "1:112304711239:web:0e052d4162756f51b2f362",
    measurementId: "G-92YCF5S0X1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;