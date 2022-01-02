//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB6IDJKbBBX40gwmUZRD5qVVybK-yVT6pg",
    
      authDomain: "kwitter-d0aa2.firebaseapp.com",
    
      databaseURL: "https://kwitter-d0aa2-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-d0aa2",
    
      storageBucket: "kwitter-d0aa2.appspot.com",
    
      messagingSenderId: "716439069048",
    
      appId: "1:716439069048:web:6950e5909d6217cdb1a88d",
    };
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")

function send () {

      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      
      name:user_name,
      message:msg,
      like:0});
      document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){

      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      
      window.location="index.html";
      }