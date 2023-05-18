


import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

//importamos el router para que se redireccione automáticamente cuando el usuario no está logueado




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAmZolfGe_gkORmMMxvVuUYShI_41y82H4",
  authDomain: "ingenieriaweb-8a680.firebaseapp.com",
  projectId: "ingenieriaweb-8a680",
  storageBucket: "ingenieriaweb-8a680.appspot.com",
  messagingSenderId: "1065831052004",
  appId: "1:1065831052004:web:430a006c82017ecbc472f1",
  measurementId: "G-VP8L36GBJ3"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const authFirebase = getAuth(app);


// onAuthStateChanged(auth, async (user) => {
//   if (user) {
//     // El usuario está autenticado
//     // Aquí puedes acceder a la información del usuario en el objeto `user`
//     console.log("Usuario autenticado:", user.uid);
//     window.location.replace('/home');
    
    
//   } else {
//     // El usuario no está autenticado
//     console.log("Usuario no autenticado");
//     //Si el usuario no está autenticado lo redirige automáticamente a la pestaña de inicio
//     window.location.replace('/');
//   }
// });


export {authFirebase, app, signInWithEmailAndPassword, signOut};