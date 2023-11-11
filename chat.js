// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCm83scGMDqUuUVmuOAeftoMl6OovGvKls",
    authDomain: "kwitter-39f19.firebaseapp.com",
    databaseURL: "https://kwitter-39f19-default-rtdb.firebaseio.com",
    projectId: "kwitter-39f19",
    storageBucket: "kwitter-39f19.appspot.com",
    messagingSenderId: "1026702277277",
    appId: "1:1026702277277:web:8e46f1005144f0d51bb274",
    measurementId: "G-DRY4GFG1K5"
  };
  
  // Initialize Firebase
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);


    window.location = "chat_room.html";
}



