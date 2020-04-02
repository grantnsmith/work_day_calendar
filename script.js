$(document).ready(function() {

// Adding current date to the top of the page
var currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(currentDate);

// Add function to check localStorage for userEdits and render them to the page
// function updateFromLocalStorage() {
//     var userEdits = JSON.parse(localStorage.getItem("userEdits"));
  
//     if (userEdits !== null) {
//       highScore = storedHighScore;


// Save Event button
$(".saveBtn").on("click", function() {
    var currentEventID = event.target.parentElement.previousElementSibling.id;
    console.log(currentEventID);
    var currentTableCell = event.target.parentElement.previousElementSibling;
    console.log(currentTableCell.innerText);
    localStorage.setItem(["userEdits"+currentEventID], JSON.stringify(currentTableCell.innerText));
   
});

// Setting interval to run checkTime function every 10 seconds
setInterval(function(){
    if (moment().minute() == 0) {
        renderScreen();
    }
}, 10000);

function renderScreen() {
    // $("#5pm").addClass("table-success");


    // Whatever the current hour (momement().hour()) is (e.g. 9,10,15,) find the 
    // element with that ID and change this attribue (addClass "table-danger")
    // Those with id's that are less than (addClass - "table-secondary")
    // Those with id's that are greater than (addClass - "table-success")
}

// renderScreen();

});


