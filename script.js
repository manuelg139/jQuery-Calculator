// define global variables (querySelector, $ stuff)
// assign addEventListener to all buttons 
// functions for addition, subtraction, multiplication, etc. (assign addEventListener to each function button)
// assign addEventListener for answer button and assign answer to the correct place


var numBtn = $(".number")

var plusBtn = $("button-plus")
var minusBtn = $("button-minus")
var multBtn = $("button-times")
var divideBtn = $("button-divide")
var carrotBtn = $("button-power")
var equalBtn = $("button-equal")
var clearBtn = $("button-clear")


var firstNum
var operator
var secondNum
var answer

numBtn.on("click", function(){
    console.log(this.value)
}); 






// var imageContainer = document.querySelector(".container");

// imageContainer.addEventListener("click", function(event) {
//   var element = event.target;

//   if (element.matches(".box")){
//     var state = element.getAttribute("data-state");

//     if (state === "hidden") {
//       element.dataset.state = "visable";
//       element.textContent = element.dataset.number;
//     } else {
//       element.dataset.state = "hidden";
//       element.textContent = "";
//     }
//   }
// });






