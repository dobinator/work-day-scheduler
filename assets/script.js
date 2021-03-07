//declare variables
var timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentDay = document.getElementById("currentDay"); currentDay.textContent= timeNow;
var saveButton = document.querySelectorAll("saveBTn");
var description= document.querySelectorAll(".description").textContent;
var timeBlock= document.querySelector ("#time-block")
var time = [$(".hour"). text()];
var hour = parseInt(time);

//Below that is a series of time blocks



//Timeblocks are set for standard business hours
for (let i =0; i < 8; i++){
    $timeBlock.append(buildTimeBlock(hour))
    }

//Timeblocks are color coded to indicate whether it is in the past, present, or future

function buildTimeBlock(hour) {
    var background; 
    if(currentHour===hour){
      background= $timeBlock.addClass
      ("present")
    }else if( currentHour < hour){
  background ="past";
  } else {
      background= "future"
    }
  }
//when you click a timeblock I can enter an event


//when you click the save button for that timeblock the text is saved to local storage
$("saveBtn").on("click", function(e){
//prevents refresh
e.preventDefault ();
//if the input of description is nothing(less than 1)return
if(description.length < 1 )return;
//the text of the description var is equal to the input of the description

//Save the list to localStorage
localStorage.setItem("description",description); 
//function for each desciption
}
//refresh the page


//  saved events 