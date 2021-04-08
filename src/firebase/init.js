import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBy06xXdr-Xg0gjeayk0793B0ltCDV_MmI",
    authDomain: "supply-log.firebaseapp.com",
    databaseURL: "https://supply-log-default-rtdb.firebaseio.com",
    projectId: "supply-log",
    storageBucket: "supply-log.appspot.com",
    messagingSenderId: "674276468390",
    appId: "1:674276468390:web:1979f7a51680bf48827667"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true})

export default firebaseApp.firestore()
  
