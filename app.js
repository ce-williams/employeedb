 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDmpqUUMU_T0w-rSzfTz6Lo2PwTi5fJ10o",
    authDomain: "employee-db-5b83f.firebaseapp.com",
    databaseURL: "https://employee-db-5b83f.firebaseio.com",
    projectId: "employee-db-5b83f",
    storageBucket: "employee-db-5b83f.appspot.com",
    messagingSenderId: "232525928558"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(".btn").click(function(evt) {
    evt.preventDefault();

    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var startDate = $("#start-date").val().trim();
    var rate = $("#rate").val().trim();

    database.ref().push({
      newName: name,
      newRole: role,
      newStartDate: startDate,
      newRate: rate
    });
  });


