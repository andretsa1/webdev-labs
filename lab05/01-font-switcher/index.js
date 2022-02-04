

const makeBigger = () => {
   //alert('make bigger!');
   var computedFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
   //console.log(computedFontSize);
   var size1 = parseInt(computedFontSize);
   //var size1 = document.getElementById("head").style.fontSize;
   //float_size1 += 0.25;
   size1 += 1;
   var new_size = '' + size1 + 'px';
   document.querySelector("body").style.fontSize = new_size;
   //document.getElementById("head").style.fontSize = new_size;
   //document.getElementById("text").style.fontSize = '2em';
};

const makeSmaller = () => {
   //alert('make smaller!');
   //document.getElementById("head").style.fontSize = '1em';
   //document.getElementById("text").style.fontSize = '1em';
   var computedFontSize = window.getComputedStyle(document.querySelector("body")).fontSize;
   //console.log(computedFontSize);
   var size1 = parseInt(computedFontSize);
   //var size1 = document.getElementById("head").style.fontSize;
   //float_size1 += 0.25;
   size1 -= 1;
   var new_size = '' + size1 + 'px';
   document.querySelector("body").style.fontSize = new_size;
};


document.getElementById("a1").addEventListener('click', makeBigger);
document.getElementById("a2").addEventListener('click', makeSmaller);
