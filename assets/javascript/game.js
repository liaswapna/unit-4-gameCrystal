// GLOBAL VARIABLES
//-----------------
var compValue;
var userValue;
var counter = 0;
var win = 0;
var loss = 0;
var Score;


// Function to reset values if win/lose game.
// ------------------------------------------
function myReset(){

    // Generate random computer variable.
    compValue = Math.floor(Math.random()*(121-19)+19);
    console.log("comp"+compValue);
    $("#random-value").text(compValue);

    // Assign values to each crystal.
    // Using each, loop through button tags with same class name
    $(".btn").each(function (i,obj){
    hiddenValue = Math.floor(Math.random()*(13-1)+1);
    console.log("crystal-value"+hiddenValue);
    $(this).attr("butn-value",hiddenValue);
    });

    // Set score to 0.
    counter = 0;
    $("#score-value").text(counter);
}

myReset();

// Main block where click event happens.
// --------------------------------------
// Write click event function.
$(".btn").on("click",function(){


    // ......Inside the function
    // Get the value of the crystal clicked using $(this).
    userValue = $(this).attr("butn-value");
    console.log("userValue: "+userValue);

    // Add crystal value to the counter and update the score.
    counter = counter + parseInt(userValue);
    $("#score-value").text(counter);
    

    // If random value is equal to the score then increment win by 1 and call function to reset.
    if(compValue == counter){
        win++;
        console.log("win: "+win);
        $("#win-1").text(win);
        console.log("counter: "+counter);

        myReset();
    }

    // If random value is greater than the score then increment loss by 1 and call function to reset.
    if(compValue < counter){
        loss++;
        console.log("loss: "+loss);
        $("#loss-1").text(loss);
        console.log("counter: "+counter);
        myReset();
    }
});