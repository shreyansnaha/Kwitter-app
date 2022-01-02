//ADD YOUR FIREBASE LINKS HERE
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

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name",
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName('this.id')'>#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}

function logout(){

localStorage.removeItem("user_name")
localStorage.removeItem("room_name")

window.location="index.html";
}