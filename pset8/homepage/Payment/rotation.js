const ccCardBack = document.querySelector('.cc-card-back');
const ccCardFront = document.querySelector('.cc-card-front');

var spinFront = ccCardFront.addEventListener("click", function () {
    ccCardBack.setAttribute("style", "transform: rotateY(360deg);");
    ccCardFront.setAttribute("style", "transform: rotateY(180deg);");
});

var spinBack = ccCardBack.addEventListener("click", function () {
    ccCardBack.setAttribute("style", "transform: rotateY(180deg);");
    ccCardFront.setAttribute("style", "transform: rotateY(0deg);");
});

document.querySelectorAll('input').removeEventListener("click", spinBack, true);