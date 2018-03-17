$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBnZ_U_zj6RyTwjXHuKOeKlduFH9GGRzO0",
    authDomain: "rock-paper-scissors-722ba.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-722ba.firebaseio.com",
    projectId: "rock-paper-scissors-722ba",
    storageBucket: "rock-paper-scissors-722ba.appspot.com",
    messagingSenderId: "948715588581"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  var playerone = {
    name: "",
    wins: 0,
    losses: 0,
    choice: ""
  };
  var playertwo = {
    name: "",
    wins: 0,
    losses: 0,
    choice: ""
  };
  console.log(12);
  firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth();
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      // ...
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });
  function createGame() {
    var user = firebase.auth().currentUser;
    var currentGame = {
      creator: { uid: user.uid, displayName: user.displayName },
      state: STATE.OPEN
    };
    ref.push().set(currentGame);
  }
  function joinGame(key) {
    var user = firebase.auth().currentUser;
    var gameRef = ref.child(key);
    gameRef.transaction(function (game) {
      if (!game.joiner) {
        game.state = STATE.JOINED;
        game.joiner = { uid: user.uid, displayName: user.displayName }
      }
      return game;
    })
  }
  $("#get-choice").on("click", function (event) {
    event.preventDefault();
    database.ref().push({
    });
    database.ref().on("child_added", function (snapshot) {
    },
      function (errorObject) {
        console.log("Errors handled; " + errorObject.code);
      }
    );
  });
  $(".choice").on("click", function (event) {
    event.preventDefault();
    var choice = this.text;
    console.log(choice)
    database.ref().push({
      choice: choice,
    });
  })
  if ((player1 === "rock") || (player1 === "paper") || (player1 === "scissors")) {

    if ((player1 === "rock") && (player2 === "scissors")) {
      wins++;
    } else if ((player1 === "rock") && (player2 === "paper")) {
      losses++;
    } else if ((player1 === "scissors") && (player2 === "rock")) {
      losses++;
    } else if ((player1 === "scissors") && (player2 === "paper")) {
      wins++;
    } else if ((player1 === "paper") && (player2 === "rock")) {
      wins++;
    } else if ((player1 === "paper") && (player2 === "scissors")) {
      losses++;
    } else if (player1 === player2) {
      ties++;
    }
  }



  $("#send").on("click", function (chat) {
    var message = $("#message").val().trim();

    ref = firebase.database().ref("/chat");
    ref.push().set({
      name: firebase.auth().currentUser.displayName,
      message: message,

    });
    $("#message").val("");
    $("#chatBox").append("<p>" + message + name);
    console.log(message);

  });

});