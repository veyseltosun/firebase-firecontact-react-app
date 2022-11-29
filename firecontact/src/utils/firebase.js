import firebase from "firebase/app";
import "firebase/database";

  const firebaseConfig = {
    apiKey: "AIzaSyCQYJt-DOpxngxQZDz0hgokRo1eSBZLuoI",
    authDomain: "firecontact-crud.firebaseapp.com",
    projectId: "firecontact-crud",
    storageBucket: "firecontact-crud.appspot.com",
    messagingSenderId: "209112045207",
    appId: "1:209112045207:web:cc77ba5407f7d7fe77bbd2"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
  
 