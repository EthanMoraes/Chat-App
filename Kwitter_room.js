
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDJvzWFo5amdIleDIB0alXsicq9mLWwb9E",
    authDomain: "project-96-6a671.firebaseapp.com",
    databaseURL: "https://project-96-6a671-default-rtdb.firebaseio.com",
    projectId: "project-96-6a671",
    storageBucket: "project-96-6a671.appspot.com",
    messagingSenderId: "232752468895",
    appId: "1:232752468895:web:01f2ae488603b88c4a63aa",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

           firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
          console.log("room_name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("Roomname",name);
    window.location = "kwitter_page.html";
}
function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "index.html";
}