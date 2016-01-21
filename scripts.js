// var num1 = prompt("give me a number");
// var num2 = prompt("how about a second number");
//
// if(!isNaN(num1) && !isNaN(num2)) {
//   num1 = parseInt(num1);
//   num2 = parseInt(num2);
//
//   var answer = num1 + num2;
//   alert(answer);
//
// } else {
//     alert("Invalid input")
// }
var whatDo = prompt("What would you like to do?");
if(whatDo != "") {

  alert("You would like to " + whatDo + "!");
} else {
  alert("Next time enter a valid input.")
}
