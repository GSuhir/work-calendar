// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var now = dayjs();
  $("#currentDay").text(now.format("dddd, MMMM D, YYYY, h:mm A"));

  // Get the current time using Day.js
var currentTime = dayjs();

// Get all time blocks using querySelectorAll
var timeBlocks = document.querySelectorAll(".time-block");

// Loop through each time block
timeBlocks.forEach(function (timeBlock) {
  // Get the time block's hour using data attributes
  var blockHour = parseInt(timeBlock.dataset.hour);

  // Create a Day.js object for the time block's hour
  var blockTime = dayjs().hour(blockHour).startOf("hour");

  // Compare the block time to the current time
  if (blockTime.isBefore(currentTime, "hour")) {
    // If the block time is in the past, add the "past" class
    console.log("Block is in the past");
    timeBlock.classList.add("past");
  } else if (blockTime.isAfter(currentTime, "hour")) {
    // If the block time is in the future, add the "future" class
    console.log("Block is in the future");
    timeBlock.classList.add("future");
  } else {
    // If the block time is the current hour, add the "present" class
    console.log("Block is in the present");
    timeBlock.classList.add("present");
  }
  });
});




// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





  // // Get the current hour
// var currentHour = new Date().getHours();

// // Loop through all the time blocks
// $(".time-block").each(function() {

//   // Get the hour of this time block
//   var blockHour = parseInt($(this).attr("id").split("-")[1]);

//   // Compare the current hour with the hour of this time block
//   if (blockHour < currentHour) {
//     // Set the background color to gray for past time blocks
//     $(this).addClass("past");
//   } else if (blockHour === currentHour) {
//     // Set the background color to red for the current time block
//     $(this).addClass("present");
//   } else {
//     // Set the background color to green for future time blocks
//     $(this).addClass("future");
//   }
// });
// });