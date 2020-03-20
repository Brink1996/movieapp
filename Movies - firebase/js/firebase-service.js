const firebaseConfig = {
    apiKey: "AIzaSyBx8j3SOrhmuAYtcbQiliYEvaMnv_rdebM",
    authDomain: "frontend2020-8b8b7.firebaseapp.com",
    databaseURL: "https://frontend2020-8b8b7.firebaseio.com",
    projectId: "frontend2020-8b8b7",
    storageBucket: "frontend2020-8b8b7.appspot.com",
    messagingSenderId: "402209724328",
    appId: "1:402209724328:web:5553274f1015e7dc062f9d"
  };
firebase.initializeApp(firebaseConfig);
export const firebaseDB = firebase.firestore();
