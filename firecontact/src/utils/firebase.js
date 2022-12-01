import "firebase/database";
import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCQYJt-DOpxngxQZDz0hgokRo1eSBZLuoI",
  authDomain: "firecontact-crud.firebaseapp.com",
  databaseURL: "https://firecontact-crud-default-rtdb.firebaseio.com",
  projectId: "firecontact-crud",
  storageBucket: "firecontact-crud.appspot.com",
  messagingSenderId: "209112045207",
  appId: "1:209112045207:web:cc77ba5407f7d7fe77bbd2"
};


firebase.initializeApp(firebaseConfig)
export default firebase;
  
 