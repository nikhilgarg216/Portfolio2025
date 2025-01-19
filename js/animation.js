// Define DOM elements
const heroImage = document.querySelector("#hero_animation_img");

const tl = document.querySelector("#grid_tl");
const tr = document.querySelector("#grid_tr");
const bl = document.querySelector("#grid_bl");
const br = document.querySelector("#grid_br");

const tlBtn = document.querySelector("#grid_tl_btn");
const trBtn = document.querySelector("#grid_tr_btn");
const blBtn = document.querySelector("#grid_bl_btn");
const brBtn = document.querySelector("#grid_br_btn");

const tlContent = document.querySelector("#grid_tl_content");
const trContent = document.querySelector("#grid_tr_content");
const blContent = document.querySelector("#grid_bl_content");
const brContent = document.querySelector("#grid_br_content");

const projectOne = document.querySelector(".p-1");
const projectTwo = document.querySelector(".p-2");
const projectThree = document.querySelector(".p-3");

// Define colors and positions

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(-100vh)";

let brActive = "translateX(-10vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

// Define the currently active corner
let activeCorner = "";

// add an event listener to the window object to listen to resize  events
window.addEventListener("resize", handleWindowResize);

// Fuctinon that handle the style when resizing window
function handleWindowResize() {
  switch (activeCorner) {
    case "top-left":
      if (window.innerWidth <= 1100) {
        tlActive = "translateX(0) translateY(0)";
        tlContent.style.transform = "translateX(0vw) translateY(0)";
        tlContent.style.width = "100vw";
        tlContent.style.height = "100vh";
        tlContent.style.top = "0";
        tlContent.style.display = "flex";
        tlContent.style.alignItems = "center";
        tlContent.style.justifyContent = "center";
        tlContent.style.background = "var(--bg-transparent)";
        tlContent.style.zIndex = "200";
        tlBtn.style.zIndex = "300";
        trBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        tlActive = "translateX(5vw) translateY(0)";
        tlContent.style.transform = "translateX(5vw) translateY(0)";
        tlContent.style.width = "30vw";
        tlContent.style.height = "0vh";
        tlContent.style.top = "10vh";
        tlContent.style.display = "block";
      }
      break;

    case "top-right":
      if (window.innerWidth <= 1100) {
        trActive = "translateX(0) translateY(0)";
        trContent.style.transform = "translateX(0vw) translateY(0)";
        trContent.style.width = "100vw";
        trContent.style.height = "100vh";
        trContent.style.top = "0";
        trContent.style.display = "flex";
        trContent.style.alignItems = "center";
        trContent.style.justifyContent = "center";
        trContent.style.background = "var(--bg-transparent)";
        trContent.style.zIndex = "200";
        trBtn.style.zIndex = "300";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        brBtn.style.zIndex = "100";
      } else {
        trActive = "translateX(-5vw) translateY(0)";
        trContent.style.transform = "translateX(-5vw) translateY(0)";
        trContent.style.width = "30vw";
        trContent.style.height = "0";
        trContent.style.top = "10vh";
        trContent.style.display = "block";
      }
      break;

    case "bottom-left":
      if (window.innerWidth <= 600) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        tlBtn.style.zIndex = "100";
        trBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";
        projectOne.style.width = "70%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "70%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "70%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else if (window.innerWidth <= 1100) {
        blActive = "translateX(0) translateY(0)";
        blContent.style.transform = "translateX(0vw) translateY(0)";
        blContent.style.width = "100vw";
        blContent.style.height = "100vh";
        blContent.style.top = "0";
        blContent.style.display = "flex";
        blContent.style.alignItems = "center";
        blContent.style.justifyContent = "center";
        blContent.style.background = "var(--bg-transparent)";
        blContent.style.zIndex = "200";
        tlBtn.style.zIndex = "100";
        trBtn.style.zIndex = "100";
        blBtn.style.zIndex = "300";
        brBtn.style.zIndex = "100";
        projectOne.style.width = "40%";
        projectOne.style.margin = "auto auto 0.5rem";
        projectTwo.style.width = "40%";
        projectTwo.style.margin = "auto auto 0.5rem";
        projectThree.style.width = "40%";
        projectThree.style.margin = "auto auto 0.5rem";
      } else {
        blActive = "translateX(10vw) translateY(7vh)";
        blContent.style.transform = "translateX(10vw) translateY(7vh)";
        blContent.style.width = "15rem";
        blContent.style.height = "0";
        blContent.style.top = "40vh";
        blContent.style.display = "block";
        projectOne.style.width = "100%"; 
        projectTwo.style.width = "100%"; 
        projectThree.style.width = "100%"; 
      }

      break;

    case "bottom-right":
      if (window.innerWidth <= 1100) {
        brActive = "translateX(0) translateY(0)";
        brContent.style.transform = "translateX(0vw) translateY(0)";
        brContent.style.width = "100vw";
        brContent.style.height = "100vh";
        brContent.style.bottom = "0";
        brContent.style.display = "flex";
        brContent.style.flexDirection = "column";
        brContent.style.alignItems = "center";
        brContent.style.justifyContent = "center";
        brContent.style.background = "var(--bg-transparent)";
        brContent.style.zIndex = "200";
        brBtn.style.zIndex = "300";
        tlBtn.style.zIndex = "100";
        blBtn.style.zIndex = "100";
        trBtn.style.zIndex = "100";
      } else {
        brActive = "translateX(-5vw) translateY(0)";
        brContent.style.transform = "translateX(-5vw) translateY(0)";
        brContent.style.width = "30vw";
        brContent.style.height = "0";
        brContent.style.bottom = "30vh";
        brContent.style.display = "block";
      }
      break;

    default:
  }
}

//store last reverse animation, ready to be played
let lastReverseAnimation = "";

// Play animation function

function playAnimation(animation, reverseAnimation) {
  // Remove all the animation classes from heroImage
  heroImage.className = "";

  if (lastReverseAnimation !== "") {
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function () {
      heroImage.classList.remove(lastReverseAnimation);
      heroImage.classList.add(animation);
      lastReverseAnimation = reverseAnimation;
    }, 200);
  } else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  }
}

function playClosingAnimation(reverseAnimation) {
  tlBtn.innerHTML = "About";
  trBtn.innerHTML = "Experience";
  blBtn.innerHTML ="Projects"
  brBtn.innerHTML ="Contact"

  switch (activeCorner) {
    case "top-left":
      tlBtn.style.background = bgColor;
      tlBtn.style.color = textColor;
      tlContent.style.transform = tlHidden;
      break;

    case "top-right":
      trBtn.style.background = bgColor;
      trBtn.style.color = textColor;
      trContent.style.transform = trHidden;
      break;

    case "bottom-left":
      blBtn.style.background = bgColor;
      blBtn.style.color = textColor;
      blContent.style.transform = blHidden;
      break;
    case "bottom-right":
      brBtn.style.background = bgColor;
      brBtn.style.color = textColor;
      brContent.style.transform = brHidden;
      break;

    default:
  }

  heroImage.className = "";
  lastReverseAnimation = "";
  activeCorner = "";
  heroImage.classList.add(reverseAnimation);
  setTimeout(function () {
    heroImage.classList.remove(reverseAnimation);
  }, 200);
}

// Handle the "top-left" button click
tlBtn.onclick = function () {
  console.log("Top left button clicked");
  if (activeCorner === "top-left") {
    console.log("closing Top left");

    playClosingAnimation("reverse-animate-top-left");
  } else {
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // Activate the "top-left" corner
    activeCorner = "top-left";
    tlBtn.innerHTML = "&uarr;<br/>About";

    handleWindowResize();
    playAnimation("animate-top-left", "reverse-animate-top-left");

    // change background color
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColorAlt;

    // change text color
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColorAlt;

    // change position of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlActive;
  }
};

trBtn.onclick = function () {
  console.log("Top right button clicked");

  if (activeCorner === "top-right") {
    console.log("closing Top right");

    playClosingAnimation("reverse-animate-top-right");
  } else {
    tlBtn.innerHTML = "About";
    blBtn.innerHTML = "Projects";
    brBtn.innerHTML = "Contact";

    // setting the active corner
    activeCorner = "top-right";
    trBtn.innerHTML = "&uarr;<br/>Experience";

    handleWindowResize();
    playAnimation("animate-top-right", "reverse-animate-top-right");

    // change background color
    trBtn.style.background = bgColorAlt;
    brBtn.style.background = bgColor;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // change text color
    trBtn.style.color = textColorAlt;
    brBtn.style.color = textColor;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // change position of the corner content
    trContent.style.transform = trActive;
    brContent.style.transform = brHidden;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};

blBtn.onclick = function () {
  if (activeCorner === "bottom-left") {
    playClosingAnimation("reverse-animate-bottom-left");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    // brBtn.innerHTML = "Contact";

    // setting the active corner
    activeCorner = "bottom-left";
    blBtn.innerHTML = "Projects<br/>&darr;";

    handleWindowResize();
    playAnimation("animate-bottom-left", "reverse-animate-bottom-left");

    // change background color
    blBtn.style.background = bgColorAlt;
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // change text color
    blBtn.style.color = textColorAlt;
    trBtn.style.color = textColor;
    brBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // change position of the corner content
    blContent.style.transform = blActive;
    trContent.style.transform = trHidden;
    brContent.style.transform = brHidden;
    tlContent.style.transform = tlHidden;
  }
};

brBtn.onclick = function () {
  if (activeCorner === "bottom-right") {
    playClosingAnimation("reverse-animate-bottom-right");
  } else {
    tlBtn.innerHTML = "About";
    trBtn.innerHTML = "Experience";
    blBtn.innerHTML = "Projects";
    // setting the active corner
    activeCorner = "bottom-right";
    brBtn.innerHTML = "Contact<br/>&darr;";

    handleWindowResize();
    playAnimation("animate-bottom-right", "reverse-animate-bottom-right");

    // change background color
    trBtn.style.background = bgColor;
    brBtn.style.background = bgColorAlt;
    blBtn.style.background = bgColor;
    tlBtn.style.background = bgColor;

    // change text color
    trBtn.style.color = textColor;
    brBtn.style.color = textColorAlt;
    blBtn.style.color = textColor;
    tlBtn.style.color = textColor;

    // change position of the corner content
    trContent.style.transform = trHidden;
    brContent.style.transform = brActive;
    blContent.style.transform = blHidden;
    tlContent.style.transform = tlHidden;
  }
};
