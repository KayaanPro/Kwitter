const firebaseConfig = {
      apiKey: "AIzaSyA6j4dN6PxSrL46idfJ4Xl2VO1iUp5jaSk",
      authDomain: "twitter-23f14.firebaseapp.com",
      databaseURL: "https://twitter-23f14-default-rtdb.firebaseio.com",
      projectId: "twitter-23f14",
      storageBucket: "twitter-23f14.appspot.com",
      messagingSenderId: "984292512436",
      appId: "1:984292512436:web:db0d6a6389b91c52b9fde1"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_names -" + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}