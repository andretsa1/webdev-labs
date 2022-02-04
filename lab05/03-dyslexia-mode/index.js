/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
var dysF = 0;

const makedys= () => {
    if (dysF == 1) {
        document.querySelector("body").classList.remove("dyslexia-mode");
        dysF = 0;
    } else {
        document.querySelector("body").classList.add("dyslexia-mode");
        dysF = 1;
    }
};

document.getElementById("dyslexia-toggle").addEventListener('click', makedys);
