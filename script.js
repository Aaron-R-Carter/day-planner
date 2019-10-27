var firstHour = 9;
var lastHour = 18;

function todaysDate() {
  var todaysDate = moment().format('MMMM Do YYYY');
  $("#currentDay").append(`<div>${todaysDate}</div>`);
}

todaysDate();