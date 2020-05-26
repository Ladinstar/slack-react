import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJbCZAn8j82puuhp1lMplHqNUR5pJc6vY",
    authDomain: "react-slack-clone-d7c15.firebaseapp.com",
    databaseURL: "https://react-slack-clone-d7c15.firebaseio.com",
    projectId: "react-slack-clone-d7c15",
    storageBucket: "react-slack-clone-d7c15.appspot.com",
    messagingSenderId: "909319774142",
    appId: "1:909319774142:web:28b6a15c872153930b23ef",
    measurementId: "G-YWMGEDJTPM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;