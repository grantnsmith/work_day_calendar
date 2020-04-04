# work_day_calendar
A work-day planner built with jQuery. The deployed application is found here: https://grantnsmith.github.io/work_day_calendar/

## What it does

The work day calendar shows the hours for a normal work day (9am - 5pm) in a table. You can input events into each hour, save them, and they are saved to localStorage. You can update or delete the event, save, and it will change in localStorage. The Event column also changes color depending on the actual time of day. Green represents future time, red the current hour, and grey, the past hours. The day and current date are shown at the top of the page. There is also a "Clear All Events" button at the top to clear the calendar for a new day!

## Technologies Used

This is built with a little bit of Bootstrap (buttons and some table styling), a basic HTML table, some vanilla Javascript and a lot of jQuery. All the time is managed by moment.js.

## How I built it

* First I built a standard HTML table with a time, Calendar Events, and Save Event columns. Each row in the table represents a different hour of the work day.

* The first thing to run is grabbing the current day and date and displaying it in the header

* The first function to run updates anything found in localStorage and renders it into the appropriate hour table cell. The function works by grabbing each array from localStorage (there's one per hour row) and putting whatever is in the array into the corresponding hour row. 

* Next, the renderScreen function looks at the curren time and updates each event column background color.

* The Save Event button takes the current event.target ID and creates an array called "userEdits + the event.target ID" This way there is an easily identifiable array for each separate hour row.

* Next is a function that runs every ten seconds and checks the time. If the minute is equal to zero (signifying the changing of the hour) then it runs the function that renders the screen with the update color for each hour row.

* Lastly, I added a Clear All Events button to make it easier for the user to start fresh each day. It clears localStorage when pressed.


## GIF of it in action

Assets/work_day_calendar.gif


 




