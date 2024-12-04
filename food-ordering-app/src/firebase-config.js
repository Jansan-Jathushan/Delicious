// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
    
//     apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_CONFIG_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_CONFIG_MEASUREMENT_ID
// };



// export const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";

// Check if the environment variables are loaded correctly
console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

     apiKey: "AIzaSyCil8-Hn-TrVwfOD9V0pguvFAu74PG0fbA",
  authDomain: "deliciouc-4854c.firebaseapp.com",
  projectId: "deliciouc-4854c",
  storageBucket: "deliciouc-4854c.firebasestorage.app",
  messagingSenderId: "938555431256",
  appId: "1:938555431256:web:00bf7b367a16cc95a62d2d",
  measurementId: "G-M16MREXMCB"
};

console.log("Firebase Config:", firebaseConfig);

const app = initializeApp(firebaseConfig);

export default app;
