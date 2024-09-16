// first program ///////////
var name = prompt("whats your name:");
console.log(name);
var father = prompt("whats your father name:");
console.log(father);
var resultpercentage = prompt("percentage of your reuslt:");
console.log(resultpercentage);




var percentage = resultpercentage;

if (percentage >= 50) {
  console.log("you are able for admisson");
} else if (percentage >= 70) {
  console.log("your percentage is good for admisson");
} else if (percentage >= 80) {
  console.log("admisson done");
} else {
  console.log("you are no able for admisson ");
}

// /////// 2nd programm /////////
var subjects = {
  1:"Math",
  2:"computer",
  3:"physics",
  4:"urdu",
  5:"englsh"
}
console.log("What subject do you want:",subjects);
var choose = prompt("enter the number of subject:");
var subject = parseInt(choose);
switch(subject){
  case 1:
  console.log("Math");
  break;
  case 2:
    console.log("computer");
    break;
    case 3:
      console.log("physics");
      break;
      case 4:
        console.log("urdu");
        break;
        case 5:
          console.log("english");
          break;
          default:
            console.log("please enter the correct number:");
}
