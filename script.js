// make an app that asks for grades untill q or Q is pressed, and then prints the average of all the grades given

let qPressed = false;
let total = 0;
let gradeCount = 0;
while (!qPressed) {
  grade = prompt("enter the next grade or press Q/q to get average");
  if (grade === "Q" || grade === "q") {
    qPressed = true;
  } else {
    grade = Number(grade);
    console.log(grade);
    !isNaN(grade) ? (total += grade) : alert("Please enter a valid number.");
    gradeCount += 1;
  }
}
let average = total / gradeCount;
alert(`For ${gradeCount} grades, the average is:${Math.round(average)}`);
