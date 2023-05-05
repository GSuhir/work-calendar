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

  // Create a Day.js object for hour of the time block
  var blockTime = dayjs().hour(blockHour).startOf("hour");

  // Compare the block time to the current time
  if (blockTime.isBefore(currentTime, "hour")) {
    // If in the past, add the "past" class
    console.log("Block is in the past");
    timeBlock.classList.add("past");
  } else if (blockTime.isAfter(currentTime, "hour")) {
    // If in the future, add the "future" class
    console.log("Block is in the future");
    timeBlock.classList.add("future");
  } else {
    // If in the present, add the "present" class
    console.log("Block is in the present");
    timeBlock.classList.add("present");
  }

// Add an event listener to all the save buttons
var saveButtons = document.querySelectorAll(".saveBtn");
saveButtons.forEach(function(btn) {
  btn.addEventListener("click", handleSave);
});
function handleSave(event) {
  // Get the text area and its hour from the parent HTML element
  var textAreaEl = event.target.parentNode.querySelector(".description");
  var hour = event.target.parentNode.getAttribute("data-hour");

  // Save the event text in local storage
  localStorage.setItem(hour, textAreaEl.value);
}
var timeBlocks = document.querySelectorAll(".time-block");
timeBlocks.forEach(function(block) {
  var hour = block.getAttribute("data-hour");
  var textAreaEl = block.querySelector(".description");
  var savedEvent = localStorage.getItem(hour);

  if (savedEvent) {
    // If the event was saved, display it in the text area
    textAreaEl.value = savedEvent;
  }
});
  });
});






