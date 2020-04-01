$(document).ready(function() {

// Adding current date to the top of the page
var currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(currentDate);

// Add function to check localStorage for userEdits and render them to the page


// Saving user edits
function saveEdits() {
    var userInput = document.getElementsByClassName("eventCol");
    var userInput = eventFormEl.innerHTML;
    localStorage.setItem("userEdits", JSON.stringify(userInput));
    console.log("UserInput: " + userInput);
}

// Save Event button
$(".saveBtn").on("click", function() {
    // console.log("Button clicked");
    saveEdits();
});

// Setting interval to run checkTime function every 10 seconds
setInterval(function(){
    if (moment().minute() == 7) {
        console.log("it works");
    }
}, 10000);





});


