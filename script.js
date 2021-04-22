
//declaring sections that I want blurred
const filterSections = [
  document.getElementById("media"),
  document.getElementById("projects"),
  document.getElementById("navbar"),
  document.getElementById("welcome")
];


function showPopup(index) {
    var info = document.getElementById(index);
    var background = document.getElementById("fuzzyness");
    background.classList.toggle("fuzzshow");
    info.classList.toggle("show");

    //looping through and applying the blur to the sections
  for (let i = 0; i < filterSections.length; i++) {
      let blurred = filterSections[i];
      blurred.classList.toggle("blur");
    };
  };



function hidePopup(index) {
    var info = document.getElementById(index);
    var background = document.getElementById("fuzzyness");
    background.classList.toggle("fuzzshow");
    info.classList.toggle("show");

    //looping through and unapllying the blur to the sections
    for (let i = 0; i < filterSections.length; i++) {
      let blurred = filterSections[i];
      blurred.classList.toggle("blur");
    };
};