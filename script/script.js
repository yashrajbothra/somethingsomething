const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 1, 21).getTime();
const month = new Date().getMonth();
// countdown
let timer = setInterval(function () {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  diff = fourthOfJuly - today;
  var x = document.getElementsByClassName("hbd")[0];
  var y = document.getElementById("timer");
  console.log(x);

  if (diff <= 0) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);