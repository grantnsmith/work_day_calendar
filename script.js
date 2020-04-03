$(document).ready(function() {

// Adding current date to the top of the page
var currentDate = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(currentDate);

updateFromLocalStorage();

// Add function to check localStorage for userEdits and render them to the page
function updateFromLocalStorage() {
    var userEdits9 = JSON.parse(localStorage.getItem("userEdits9"));
    if (userEdits9 !== null) {
      $("#9").text(userEdits9);
    };
    var userEdits10 = JSON.parse(localStorage.getItem("userEdits10"));
    if (userEdits10 !== null) {
      $("#10").text(userEdits10);
    };
    var userEdits11 = JSON.parse(localStorage.getItem("userEdits11"));
    if (userEdits11 !== null) {
      $("#11").text(userEdits11);
    };
    var userEdits12 = JSON.parse(localStorage.getItem("userEdits12"));
    if (userEdits12 !== null) {
      $("#12").text(userEdits12);
    };
    var userEdits13 = JSON.parse(localStorage.getItem("userEdits13"));
    if (userEdits13 !== null) {
      $("#13").text(userEdits13);
    };
    var userEdits14 = JSON.parse(localStorage.getItem("userEdits14"));
    if (userEdits14 !== null) {
      $("#14").text(userEdits14);
    };
    var userEdits15 = JSON.parse(localStorage.getItem("userEdits15"));
    if (userEdits15 !== null) {
      $("#15").text(userEdits15);
    };
    var userEdits16 = JSON.parse(localStorage.getItem("userEdits16"));
    if (userEdits16 !== null) {
      $("#16").text(userEdits16);
    };
    var userEdits17 = JSON.parse(localStorage.getItem("userEdits17"));
    if (userEdits17 !== null) {
      $("#17").text(userEdits17);
    };
};

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
};

// Clear All Events button, clears localStorage and all event column text
$(".clearEventsBtn").on("click", function(){
    localStorage.clear();
    $(".eventCol").text("");
});

});


