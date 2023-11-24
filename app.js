import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import {
  getFirestore,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyBQe3-PMR3-ra_vy5W2t3uRvI2KuLbfVFg",
    authDomain: "fir-c6ab4.firebaseapp.com",
    projectId: "fir-c6ab4",
    storageBucket: "fir-c6ab4.appspot.com",
    messagingSenderId: "364433536679",
    appId: "1:364433536679:web:d2dc28e8714e6493b4cd82",
    measurementId: "G-RF2DT1FQ0Y"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

// Initialize Firebase
const auth = getAuth();
const storage = getStorage();
const db = getFirestore(app);

async function man() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;

  var file = document.getElementById("file").files[0];

  const storageRef = ref(storage, email);
  console.log(file);

  uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
  await setDoc(doc(db, "users", email), {
    fname: firstname,
    lname: lastname,
  });

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("Success");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}
module.man = man;

function fun() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("email", email)
      localStorage.setItem("AccessToken", user.accessToken)
      alert("user sigin successfully")
      window.location.href="../index.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });
}

module.fun = fun;





