

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  // <----
let firebaseApp;
SetupFirebase();

/**
* Firebase Initialization Function
* This must be called before any firebase query
*/
function SetupFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDhdaDShYn96UQZbfONeuxWiHmI0SHRORw",
        authDomain: "hey1-portfolio.firebaseapp.com",
        projectId: "hey1-portfolio",
        storageBucket: "hey1-portfolio.appspot.com",
        messagingSenderId: "682037948539",
        appId: "1:682037948539:web:f1ef5f7f920ee7acf7b2de",
        databaseURL: "https://hey1-portfolio.firebaseio.com",
        measurementId: "G-YZMRN0SP93"
    };
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;
