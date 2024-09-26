//html declaration
var model = document.querySelector(".model");
var modelImg = document.querySelector(".model img");

var allImg = Array.from(document.querySelectorAll(".row img"));
var rightBtn = document.querySelector(".rightBtn");
var leftBtn = document.querySelector(".leftBtn");
var closeBtn = document.querySelector(".closeBtn");

// global variabels
var currentIndex;
//functions
function ShowModel() {
  model.classList.replace("d-none", "d-block");
}

function closeModel() {
  model.classList.replace("d-block", "d-none");
}

function showImg(info) {
  var value = info.target.src;
  modelImg.setAttribute("src", `${value}`);

  var currentImg = info.target;
  currentIndex = allImg.indexOf(currentImg);
  //   console.log(currentIndex);
}

function nextImg() {
  var index = currentIndex++;

  if (index < allImg.length) {
    var currentSrc = allImg[index].getAttribute("src");
    modelImg.setAttribute("src", currentSrc);
  } else {
    currentIndex = 0;
  }
}

function previousImg() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = allImg.length - 1;
  }
  var previousSrc = allImg[currentIndex].getAttribute("src");
  modelImg.setAttribute("src", previousSrc);
}

for (let index = 0; index < allImg.length; index++) {
  allImg[index].addEventListener("click", (e) => {
    ShowModel();
    showImg(e);
    nextImg();

    // console.log(e);
  });
}

closeBtn.addEventListener("click", closeModel);
rightBtn.addEventListener("click", nextImg);
leftBtn.addEventListener("click", previousImg);

// doc
document.addEventListener("keydown", (e) => {
  console.log(e.code);

  switch (e.code) {
    case "ArrowRight":
      nextImg();
      break;

    case "ArrowLeft":
      previousImg();
      break;

    case "Space":
      closeModel();
      break;
  }
});
