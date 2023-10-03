const secretContent = document.querySelector("#secretContent");
secretContent.style.display = 'none';

const firebaseConfig = {
    apiKey: "AIzaSyB8ORknKCwksUxi52hVEdEKtAHVOuVG91g",
    authDomain: "fir-auth-55f74.firebaseapp.com",
    databaseURL: "https://fir-auth-55f74-default-rtdb.firebaseio.com",
    projectId: "fir-auth-55f74",
    storageBucket: "fir-auth-55f74.appspot.com",
    messagingSenderId: "556929752796",
    appId: "1:556929752796:web:0cf91958aaba83bc089e19",
    measurementId: "G-B5FPL1KW9C"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  var firebaseRef = firebase.database().ref('texts');
  document.querySelector('#submit').addEventListener('click',()=>{
    const text = document.getElementById('text').value;
    firebaseRef.push(text);
  });
  