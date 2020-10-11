const position = document.getElementById("services").offsetTop;
const element = document.getElementsByClassName("animate")[0];
const theNav = document.getElementsByClassName("changePos")[0];

// Animate boxes when scroll
function createAnimation(scrolled) {
  if (scrolled >= position-150) {
    element.style.visibility = "visible";
    element.classList.add("animate__animated", "animate__fadeInUp");
  }
}

//navbar

function navPosition(scrolled) {
  if (scrolled >= position-200 ) {
    theNav.classList.remove("sticky_position");
    theNav.classList.add("fixed_position");
  } else {
    theNav.classList.remove("fixed_position");
    theNav.classList.add("sticky_position");
  }
}

//Scroll spy

let findSectionsPos = function () {
  const sections = document.querySelectorAll(".section");

  let sectionsPos = {};

  Array.from(sections, (e) => {
    sectionsPos[e.id] = e.offsetTop;
  });
  return sectionsPos;
};

let sectionPos = findSectionsPos();
console.log(sectionPos);
let links = document.querySelectorAll("nav li a");

let scrollSpy = function (scrolled) {
  for (var i in sectionPos) {
    if (scrolled > sectionPos[i]-100) {
      links.forEach((e) => e.classList.remove("underline"));
      document.querySelectorAll(`nav li .${i}`)[0].classList.add("underline");
    }
   
  }
};

window.addEventListener("scroll", () => {
  var scroll = window.pageYOffset;
  scrollSpy(scroll);
  createAnimation(scroll);
  navPosition(scroll);
});

// scroll to top button
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
