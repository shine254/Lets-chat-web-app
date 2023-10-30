
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC5kMZ7wvJpLAT9u7Z8YBKV59XjF-aqqRE",
      authDomain: "project-93-letschat-web-app-1.firebaseapp.com",
      databaseURL: "https://project-93-letschat-web-app-1-default-rtdb.firebaseio.com",
      projectId: "project-93-letschat-web-app-1",
      storageBucket: "project-93-letschat-web-app-1.appspot.com",
      messagingSenderId: "599747272052",
      appId: "1:599747272052:web:04fa716f9c059b29902021"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function send() {
            msg = document.getElementById("msg").value;
            console.log("Message "+msg);
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0,
                  dislike:0
            });
            document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "main.html";
 }
 getData();


function updateLike(message_id)
{
      console.localStorage("clicked on the like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
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