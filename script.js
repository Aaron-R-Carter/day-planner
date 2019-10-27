// global variables
var firstHour = 9;
var lastHour = 13;
var firstHour2 = 1;
var lastHour2 = 6;

//date function
function todaysDate() {
  var todaysDate = moment().format("MMMM Do YYYY");
  $("#currentDay").append(`<div>${todaysDate}</div>`);
}

//run date function
todaysDate();

// 9-12pm function
function displayPlanner() {
  for (i = firstHour; i < lastHour; i++) {

    //create elements
    var timeDiv = $(`<div class="row dateRow">`);
    var leftCol = $(`<div class="col-2"></div>`);
    var midCol = $(`<div class="col-8"></div>`);
    var rightCol = $(`<div class="col-2"></div>`);
    var textContentDiv = $(`<div class="row contentRow">`);

    var timeCol = $(`<div class="col-2 time contentCenter padZero" id="time${i}">${i}</div>`);

    var taskCol = $(`<div class="col-8 contentCenter padZero"></div>`);
    var taskInput = $(`<textarea class="task contentCenter" id="${i}"></textarea>`);

    var saveCol = $(`<div class="col-2 contentCenter padZero" ></div>`);
    var saveButton = $(`<button class="contentCenter saveBtn" id="save" data-key="${i}"></button>`);
    var saveIcon = $(`<i class="fas fa-save font24"></i>`);

    //append elements
    timeDiv.append(leftCol, midCol, rightCol);
    midCol.append(textContentDiv);
    textContentDiv.append(timeCol, taskCol, saveCol);
    taskCol.append(taskInput);
    saveCol.append(saveButton);
    saveButton.append(saveIcon);
    $("#todoList").append(timeDiv);
  }
};

//1-5pm function
function displayPlanner2() {
  for (i = firstHour2; i < lastHour2; i++) {

    //create elements
    var timeDiv = $(`<div class="row dateRow">`);
    var leftCol = $(`<div class="col-2"></div>`);
    var midCol = $(`<div class="col-8"></div>`);
    var rightCol = $(`<div class="col-2"></div>`);
    var textContentDiv = $(`<div class="row contentRow">`);

    var timeCol = $(`<div class="col-2 time contentCenter padZero" id="time${i}">${i}</div>`);

    var taskCol = $(`<div class="col-8 contentCenter padZero"></div>`);
    var taskInput = $(`<textarea class="task contentCenter" id="${i}"></textarea>`);

    var saveCol = $(`<div class="col-2 contentCenter padZero" ></div>`);
    var saveButton = $(`<button class="contentCenter saveBtn" id="save" data-key="${i}"></button>`);
    var saveIcon = $(`<i class="fas fa-save font24"></i>`);

    //append elements
    timeDiv.append(leftCol, midCol, rightCol);
    midCol.append(textContentDiv);
    textContentDiv.append(timeCol, taskCol, saveCol);
    taskCol.append(taskInput);
    saveCol.append(saveButton);
    saveButton.append(saveIcon);
    $("#todoList").append(timeDiv);
  }
};

// run functions and display planner elements
displayPlanner();
displayPlanner2();


