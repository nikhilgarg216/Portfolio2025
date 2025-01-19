let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex)

function showProject(num) {
  // go to our first project after clicking from last btn
  if (num > project.length) {
    slideIndex = 1;
  }
  //   go to last project. when clicking backward from first project
  if (num < 1) {
    slideIndex = project.length;
  }
  // for loop to hide all the prject
  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}
function navigateProject(num) {
  // change the slide index based on back or forward btn
  showProject((slideIndex += num));
}
