var timer = 0;
var timerInterval;
var ms = document.getElementById('milliseconds');
var second = document.getElementById('mainsecond');
var minute = document.getElementById('mainminute');
function start() {
    stop();
    timerInterval = setInterval(function () {
        timer += 1 / 60;
        msVal = Math.floor((timer - Math.floor(timer)) * 100); // Gives the milliseconds value
        secondVal = Math.floor(timer) - Math.floor(timer / 60) * 60; // Gives the Second values
        minuteVal = Math.floor(timer / 60); // Gives the Minute value
        ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal;
        second.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
        minute.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
    }, 1000 / 60);

}
function stop() {
    clearInterval(timerInterval);
}
function reset() {
    stop();
    timer = 0;
    ms.textContent = '00';
    second.textContent = '00';
    minute.textContent = '00';
}
function changeLabel() {
    var button = document.getElementById("start");

    // Check the current label of the button
    if (button.innerHTML === "Start") {
      // Change the label when clicked
      button.innerHTML = "Stop";
      start();
    } else {
      // Reset the label if already changed
      button.innerHTML = "Start";
      stop();
    }
}
function createNewDivision() {
    
    var currentTime = new Date().toLocaleTimeString();
    // Create a new division element
    var newDivision = document.createElement("div");
    newDivision.className = "subDivision";
    newDivision.style.color="white"
    newDivision.innerHTML = minute.textContent + ":" + second.textContent + ":" + ms.textContent;

    // Append the new division to the main division
    var mainDivision = document.getElementById("mainstopwatch");
    mainDivision.appendChild(newDivision);

    // Increase the size of the main division to fit the new division
    mainDivision.style.height = (mainDivision.offsetHeight + newDivision.offsetHeight) + "px";

}
function deleteNewDivisions() {
    // Get all divisions with the class "subDivision"
    var newDivisions = document.querySelectorAll(".subDivision");

    // Get the main division
    var mainDivision = document.getElementById("mainstopwatch");

    // Remove each newly created division
    newDivisions.forEach(function (newDivision) {
      mainDivision.removeChild(newDivision);
    });

    // Reset the size of the main division
    mainDivision.style.height = "auto";
  }