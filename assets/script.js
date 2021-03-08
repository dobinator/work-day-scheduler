//declare variables
var timeNow = moment().format('MMMM Do YYYY, h:mm a');
var currentDay = document.getElementById("currentDay"); 
currentDay.textContent = timeNow;

//Below that is a series of time blocks

var hour9 = $("#hour-9"). text(); 
var hour10 = $("#hour-10"). text(); 
var hour11 = $("#hour-11"). text(); 
var hour12 = $("#hour-12"). text(); 
var hour13 = $("#hour-13"). text(); 
var hour14 = $("#hour-14"). text(); 
var hour15 = $("#hour-15"). text(); 
var hour16 = $("#hour-16"). text(); 
var hour17 = $("#hour-17"). text(); 


// //Timeblocks are set for standard business hours
// //for (let i =0; i < 8; i++){
//     $timeBlock.append(buildTimeBlock(hour))
//     }


// //Timeblocks are color coded to indicate whether it is in the past, present, or future

// function buildTimeBlock(hour) {
//     var background; 
//     if(currentHour===hour){
//       background= $timeBlock.addClass
//       ("present")
//     }else if( currentHour < hour){
//   background ="past";
//   } else {
//       background= "future"
//     }
//   }

//   //when you click a timeblock I can enter an event


// //when you click the save button for that timeblock the text is saved to local storage
// $("saveBtn").on("click", function(e){
//     //prevents refresh
//     e.preventDefault ();
//     //if the input of description is nothing(less than 1)return
//     var description= document.querySelectorAll(".description").textContent;
//     if(description.length < 1 )return;
//     //the text of the description var is equal to the input of the description
    
//     //Save the list to localStorage
//     localStorage.setItem("description",description); 
//     //function for each desciption
//     }