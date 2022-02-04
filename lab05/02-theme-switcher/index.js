/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/
const makeDef= () => {
   document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
};

const makeDes= () => {
   document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
   document.querySelector("body").classList.add("desert");
};

const makeO= () => {
   document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
   document.querySelector("body").classList.add("ocean");
};

const makeH= () => {
   document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
   document.querySelector("body").classList.add("high-contrast");
};

document.getElementById("default").addEventListener('click', makeDef);
document.getElementById("desert").addEventListener('click', makeDes);
document.getElementById("ocean").addEventListener('click', makeO);
document.getElementById("high-contrast").addEventListener('click', makeH);
