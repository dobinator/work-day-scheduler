//declare variables
var timeNow = moment().format("MMMM Do YYYY, h:mm a");
var currentDay = document.getElementById("currentDay");
currentDay.textContent = timeNow;

// calling the function to color the blocks by current hour
function colorCode() {
// variable for current hour using moment
  var currentHour = moment().hour()
  //running a for each loop in jQuery to add a specific background depending on the time
  $(".row").each(function () {
    var timeRow = parseInt($(this).attr("id"));  
    if (currentHour > timeRow) {
      $(this).children(".description").addClass("past");
    } else if (currentHour < timeRow) {
      $(this).children(".description").addClass("future");
    } else {
      $(this).children(".description").addClass("present");
    }
  });
}
colorCode();

//Establishing on the click there is a save on local storage
$(".btn").on("click", function(){
  var valueEl = $(this).siblings(".description").val();
  var timeEl = $(this).parent().attr("id");
  localStorage.setItem(timeEl, valueEl)

});
//grabbing the local storage to display back on the screen
function localStore(){
  //for each loop in jQuery to get items out of local storage
  $(".row").each (function(){
   //grabbing the id off the class of row 
    var key = $(this).attr("id")
    //grabbing the value out of local storage and getting the key
    var value = localStorage.getItem(key)
    //giving a value to the text box of description
$(this).children(".description").val(value)
})
}
localStore()

