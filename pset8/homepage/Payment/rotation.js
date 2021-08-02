const ccCardBack = document.querySelector(".cc-card-back");
const ccCardFront = document.querySelector(".cc-card-front");

var spinFront = ccCardFront.addEventListener("click", e => {
    
    if (e.target.tagName !==  "INPUT" && e.target.tagName !== "SELECT") {
        ccCardBack.setAttribute("style", "transform: rotateY(360deg);");
        ccCardFront.setAttribute("style", "transform: rotateY(180deg);");
        console.log(e.target.tagName)
    }


});

var spinBack = ccCardBack.addEventListener("click", e => {
    if (e.target.tagName !== "INPUT") {
        ccCardBack.setAttribute("style", "transform: rotateY(180deg);");
        ccCardFront.setAttribute("style", "transform: rotateY(0deg);");
        console.log(e)
    }
});