import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLVv5nw-3393BMZy3ZyMHEeHBgkqTAtYA",
    authDomain: "given-the-king.firebaseapp.com",
    projectId: "given-the-king",
    storageBucket: "given-the-king.firebasestorage.app",
    messagingSenderId: "359001451159",
    appId: "1:359001451159:web:6472afe9c0c3839817d2",
    measurementId: "G-LR3V5CSYWL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
