$(document).ready(function() {
  $("button#submit").click(function(ev) {
    ev.preventDefault();
    // console.log("hi");

    var userInput = $("#userInput").val();
    console.log(userInput);

    $("#puzzleResults").text(userInput)
      // $("p#puzzleResults").text(userInput);
    });
  });
