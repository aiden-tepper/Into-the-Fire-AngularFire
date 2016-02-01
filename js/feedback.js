angular.module("app", ["firebase"])
.controller("controller", ["$scope", "$firebaseObject", function($scope, $firebaseObject) {

  var firebase = new Firebase("https://into-the-5ire.firebaseio.com/");

  $("#add-form").submit(function(event){
    event.preventDefault();
    console.log("Form submitted");
    var fullname = $("#name").val();
    var feedback = $("#feedback").val();
    var date = new Date();
    var timestamp = date.toLocaleDateString() + " at " + date.toLocaleTimeString();
    var JSONObj = {
      "fullname":fullname,
      "feedback":feedback,
      "timestamp":timestamp,
      "faves": 0
    };
    firebase.push(JSONObj, function(){
      console.log("Push to Firebase was successful");
    });
  });

}

$(document).ready(function(){
  updateDOM();
  console.log("Document loaded");
});




}]);
