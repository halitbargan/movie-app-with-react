import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project setting
const firebaseConfig = {
    apiKey: "AIzaSyBzEhg1WF7MLJNyLU_yl2IWuaA-6RcqjaY",
    authDomain: "movie-app-13569.firebaseapp.com",
    projectId: "movie-app-13569",
    storageBucket: "movie-app-13569.appspot.com",
    messagingSenderId: "766703358943",
    appId: "1:766703358943:web:9b9b93cd9ae9379a302a6a",
  };
// Initialize Firebase
  const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
  const auth= getAuth(app);

  export const createUser = async (email, password,navigate) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/")
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
  };

  export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (err) {
      alert(err.message);
    }
  };

  export const logOut=()=>{
      signOut(auth)
      alert("logged out successfully");
  }