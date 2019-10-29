$(document).ready(function() {

  $("button#submit").click(function(ev){

    ev.preventDefault();
    // console.log("hi");

    var userInput = $("#userInput").val().split("");
    console.log(userInput);


    $("#puzzleResults").text(userInput)

    var vowels = ["a","e","i","o","u"]

    for(index = 0; index < userInput.length; index++ ) {
      // if (vowels.includes(userInput[index]){
        //
        // }

        var doesItInclude = vowels.includes(userInput[index]);
        var swissSentence = []

        if (doesItInclude == true) {
          console.log(doesItInclude);
          userInput[index] = "-";
          console.log(userInput);
        }

      };

      $("#puzzleResults").text(userInput.join(""));

      // if user input at index =vowel replace with -

      // if $("#puzzleResults").has(vowels)) {
        //   userInput.replace(vowels,"-");
        // } else {
          //   alert("OOPS!");
          // }
        });
      });
