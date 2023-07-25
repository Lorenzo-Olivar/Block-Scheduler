// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
});


// code that saves events to their respective time blocks

var timeBlock = $('.time-block');
var saveBtnEl = $('.saveBtn');

var saveEvent = function(e) {
  for (let i = 0; i < timeBlock.length; i++) {
    const iTimeBlock = timeBlock[i];
    var time = iTimeBlock.innerText; 
    var saveEventTime = e.currentTarget.parentElement.innerText;
    if (time === saveEventTime) {
      var textValue = e.currentTarget.parentElement.children[1].value;
      localStorage.setItem(saveEventTime + 'Event', textValue)
    } else {
      
    };
    
  };
};

saveBtnEl.on("click", saveEvent)


// code for the current day
var today = dayjs();
// console.log(today.$H)







// code for displaying the current day
var currentDayEl = $('#currentDay')
// console.log(currentDayEl)
var currentDayFormat = today.format('dddd, MMMM D')
// console.log(currentDayFormat)
currentDayEl.text(currentDayFormat);





// code for determining past, present, future for the time blocks + displaying the stored localstorage text per time block
var currentHour = today.format('H')
// console.log(currentHour)

var am9 = $('#hour-9')

am9[0].children[1].innerText = (localStorage.getItem('9AMEvent'));

am9 = 9;
function hour9() {
  if (am9 < currentHour) {
    am9 = $('#hour-9');
    am9.attr('class', 'row time-block past');
  } else if (am9 == currentHour) {
    am9 = $('#hour-9');
    am9.attr('class', 'row time-block present');
  } else {
    am9 = $('#hour-9');
    am9.attr('class', 'row time-block future');
  }
};
hour9();






var am10 = $('#hour-10')

am10[0].children[1].innerText = (localStorage.getItem('10AMEvent'));

am10 = 10;
function hour10() {
  if (am10 < currentHour) {
    am10 = $('#hour-10');
    am10.attr('class', 'row time-block past');
  } else if (am10 == currentHour) {
    am10 = $('#hour-10');
    am10.attr('class', 'row time-block present');
  } else {
    am10 = $('#hour-10');
    am10.attr('class', 'row time-block future');
  }
};
hour10();

var am11 = $('#hour-11')

am11[0].children[1].innerText = (localStorage.getItem('11AMEvent'));

am11 = 11;
function hour11() {
  if (am11 < currentHour) {
    am11 = $('#hour-11');
    am11.attr('class', 'row time-block past');
  } else if (am11 == currentHour) {
    am11 = $('#hour-11');
    am11.attr('class', 'row time-block present');
  } else {
    am11 = $('#hour-11');
    am11.attr('class', 'row time-block future');
  }
};
hour11();

var pm12 = $('#hour-12')

pm12[0].children[1].innerText = (localStorage.getItem('12PMEvent'));

pm12 = 12;
function hour12() {
  if (pm12 < currentHour) {
    pm12 = $('#hour-12');
    pm12.attr('class', 'row time-block past');
  } else if (pm12 == currentHour) {
    pm12 = $('#hour-12');
    pm12.attr('class', 'row time-block present');
  } else {
    pm12 = $('#hour-12');
    pm12.attr('class', 'row time-block future');
  }
};
hour12();

var pm1 = $('#hour-13')

pm1[0].children[1].innerText = (localStorage.getItem('1PMEvent'));

pm1 = 13;
function hour13() {
  if (pm1 < currentHour) {
    pm1 = $('#hour-13');
    pm1.attr('class', 'row time-block past');
  } else if (pm1 == currentHour) {
    pm1 = $('#hour-13');
    pm1.attr('class', 'row time-block present');
  } else {
    pm1 = $('#hour-13');
    pm1.attr('class', 'row time-block future');
  }
};
hour13();

var pm2 = $('#hour-14')

pm2[0].children[1].innerText = (localStorage.getItem('2PMEvent'));

pm2 = 14;
function hour14() {
  if (pm2 < currentHour) {
    pm2 = $('#hour-14');
    pm2.attr('class', 'row time-block past');
  } else if (pm2 == currentHour) {
    pm2 = $('#hour-14');
    pm2.attr('class', 'row time-block present');
  } else {
    pm2 = $('#hour-14');
    pm2.attr('class', 'row time-block future');
  }
};
hour14();

var pm3 = $('#hour-15')

pm3[0].children[1].innerText = (localStorage.getItem('3PMEvent'));

pm3 = 15;
function hour15() {
  if (pm3 < currentHour) {
    pm3 = $('#hour-15');
    pm3.attr('class', 'row time-block past');
  } else if (pm3 == currentHour) {
    pm3 = $('#hour-15');
    pm3.attr('class', 'row time-block present');
  } else {
    pm3 = $('#hour-15');
    pm3.attr('class', 'row time-block future');
  }
};
hour15();

var pm4 = $('#hour-16')

pm4[0].children[1].innerText = (localStorage.getItem('4PMEvent'));

pm4 = 16;
function hour16() {
  if (pm4 < currentHour) {
    pm4 = $('#hour-16');
    pm4.attr('class', 'row time-block past');
  } else if (pm4 == currentHour) {
    pm4 = $('#hour-16');
    pm4.attr('class', 'row time-block present');
  } else {
    pm4 = $('#hour-16');
    pm4.attr('class', 'row time-block future');
  }
};
hour16();

var pm5 = $('#hour-17')

pm5[0].children[1].innerText = (localStorage.getItem('5PMEvent'));

pm5 = 17;
function hour17() {
  if (pm5 < currentHour) {
    pm5 = $('#hour-17');
    pm5.attr('class', 'row time-block past');
  } else if (pm5 == currentHour) {
    pm5 = $('#hour-17');
    pm5.attr('class', 'row time-block present');
  } else {
    pm5 = $('#hour-17');
    pm5.attr('class', 'row time-block future');
  }
};
hour17();
