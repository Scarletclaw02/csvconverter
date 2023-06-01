import {initializeApp} from "firebase/app";

const firebaseconfig = {
    apiKey: "AIzaSyAIr3J1HRzlUsIcS4L0tUpvvsq7urBpQ8E",
    authDomain: "csvconverter-dev.firebaseapp.com",
    databaseURL: "https://csvconverter-dev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "csvconverter-dev",
    storageBucket: "csvconverter-dev.appspot.com",
    messagingSenderId: "302183347902",
    appId: "1:302183347902:web:cdf873d5e41008cfb850ef",
    measurementId: "G-Y9WZNF6N7V"
}

const app = initializeApp(firebaseConfig)
const storage = 