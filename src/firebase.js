import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCDKH2YEgnRLo0VO3xKD5lQS_v-SY81034",
    authDomain: "my-first-personal-project.firebaseapp.com",
    databaseURL: "https://my-first-personal-project.firebaseio.com",
    projectId: "my-first-personal-project",
    storageBucket: "my-first-personal-project.appspot.com",
    messagingSenderId: "611735127300"
};
firebase.initializeApp(config);


export const database = firebase.database();


