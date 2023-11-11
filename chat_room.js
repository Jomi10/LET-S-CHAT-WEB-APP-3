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


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}