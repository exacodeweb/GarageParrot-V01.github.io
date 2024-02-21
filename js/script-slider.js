/*--================================================== PAGE GALERIE ================================================--*/
/*
 Evaluation: Sujet Garage - ECF DWWM (1)
 Giet FRANCK Graduate Développeur PHP/Symfony Promo BECQUEREL
 code passé au validator w3c, code valide: oui
*/

window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;
  /*sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;*/
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #d9777f ${percent1}% , #d9777f ${percent2}%, #dadae5 ${percent2}%)`;
}
/*---------------------------------------------------------------------------------------------------------------------*/
/*-- RANGE SLIDER 2 --*/
window.onload = function () {
  slideTre();
  slideFor();
};/**/
/*
let sliderTre = document.getElementById("slider-3");
let sliderFor = document.getElementById("slider-4");
let displayValTre = document.getElementById("range3");
let displayValFor = document.getElementById("range4");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track2");
let sliderMaxValue = document.getElementById("slider-3").max;*/

function slideTre() {
  if (parseInt(sliderTre.value) - parseInt(sliderTre.value) <= minGap) {
    sliderTre.value = parseInt(sliderFor.value) - minGap;
  }
  displayValTre.textContent = sliderTre.value;
  fillColor();
}
function slideFor() {
  if (parseInt(sliderTre.value) - parseInt(sliderTre.value) <= minGap) {
    sliderFor.value = parseInt(sliderTre.value) + minGap;
  }
  displayValFor.textContent = sliderFor.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderTre.value / sliderMaxValue) * 100;
  percent2 = (sliderFor.value / sliderMaxValue) * 100;
  /*sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;*/
 sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #d9777f ${percent1}% , #d9777f ${percent2}%, #dadae5 ${percent2}%)`;
}
/*---------------------------------------------------------------------------------------------------------------------*/
/*-- RANGE SLIDER 3 --*/
window.onload = function () {
  slideFiv();
  slideSix();
};/**/
/*
let sliderFiv = document3.getElementById("slider-5");
let sliderSix = document3.getElementById("slider-6");
let displayValFiv = document3.getElementById("range5");
let displayValSix = document3.getElementById("range6");
let minGap = 0;
let sliderTrack3 = document3.querySelector(".slider-track3");
let sliderMaxValue = document3.getElementById("slider-5").max;*/

function slideFiv() {
  if (parseInt(sliderTre.value) - parseInt(sliderFiv.value) <= minGap) {
    sliderFiv.value = parseInt(sliderSix.value) - minGap;
  }
  displayValFiv.textContent = sliderFiv.value;
  fillColor();
}
function slideSix() {
  if (parseInt(sliderFiv.value) - parseInt(sliderFiv.value) <= minGap) {
    sliderSix.value = parseInt(sliderFiv.value) + minGap;
  }
  displayValSix.textContent = sliderSix.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderFiv.value / sliderMaxValue) * 100;
  percent2 = (sliderSix.value / sliderMaxValue) * 100;
  /*sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;*/
 sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #d9777f ${percent1}% , #d9777f ${percent2}%, #dadae5 ${percent2}%)`;
}
/*

/*====================================================================================================================*//*<<<<<<*/
/*function resetFunc() {
  document
    .getElementById("#content-slide")
    .reset(); /*myForm*/ /*#container*/ /*refresh*/    /*
}  */
/*
/*var refresh = window.getElementById("refresh");*/ /*
/*refresh.addEventListener("click", location.reload(), false);*/
/*click*/
/*                                                                  var refresh = document.getElementById("#refresh");*/
/*--------------------------------------------------------------------------------------------------------------------*//*<<<<<<<*/
/*====================================================================================================================*//*<<<<<<*/
/*function resetFunc() {
  document
    .getElementById("#content-slide-2")
    .reset(); */ /*myForm*/ /*#container*/ /*refresh*/    /*
} */
/*
/*var refresh = window.getElementById("refresh");*/ /*
/*refresh.addEventListener("click", location.reload(), false);*/
/*click*/
/*                                                                  var refresh = document.getElementById("#refresh");*/
/*--------------------------------------------------------------------------------------------------------------------*//*<<<<<<<*/
/*====================================================================================================================*//*<<<<<<*/
/*function resetFunc() {
  document3
    .getElementById("#content-slide-3")
    .reset();  */ /*myForm*/ /*#container*/ /*refresh*/    /*
} */
/*
/*var refresh = window.getElementById("refresh");*/ /*
/*refresh.addEventListener("click", location.reload(), false);*/
/*click*/
/*                                                                var refresh3 = document3.getElementById("#refresh3");*/
/*--------------------------------------------------------------------------------------------------------------------*//*<<<<<<<*/

/*Test Reset*/






/*
document.getElementById("reset").onclick = function () {
  document.getElementById("Slider-1").value = 0;
  document.getElementById("slider-2").value = 100;
  // .... etc
}; */
/*
function resetFunc() {
  document.getElementById("#container").reset(); /*myForm*/ /*
}*/
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/ /*
function resetFunc() {
  document
    .getElementById(
      /*"#container",*/
/*".slider-track",*/ /*
      ".rangeslider",
      "slider-1",
      "slider-2",
      ".values",
      "range1",
      "range2",
      "body"
    )
    .reset();
}*/
/*====================================================================================================================*/
/* Test */
/**//*
document.getElementById("reset").onclick = function () {
  document.getElementById("Slider-1").value = 0;
  document.getElementById("slider-2").value = 100;
  // .... etc
};

/*====================================================================================================================*/
/*function resetFunc() {
  document
    .getElementById("#content-slide-3")
    .reset(); */ /*myForm*/ /*#container*/ /*refresh*//*
} */
/*
/*var refresh = window.getElementById("refresh");*/ /*
/*refresh.addEventListener("click", location.reload(), false);*/
/*click*/

/*var refresh = document.getElementById("#rafraichir");  */ /*#refresh2*/ 
/*
document.getElementById("reset").onclick3 = function () {
  document.getElementById("Slider-3").value = 0;*//*13*/ 
  /*document.getElementById("slider-4").value = 100;*//*23*/
  // .... etc
/*};*/
/*====================================================================================================================*/

/*
function sliderTree() {
  if (parseInt(sliderTree.value) - parseInt(sliderTwo.value) <= minGap) {
    sliderFor.value = parseInt(sliderFor.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideFor() {
  if (parseInt(sliderTree.value) - parseInt(sliderTwo.value) <= minGap) {
    sliderTre.value = parseInt(sliderTwo.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderTwo.value / sliderMaxValue) * 100;
  percent2 = (sliderTree.value / sliderMaxValue) * 100;
  /*sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;*//*
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #d9777f ${percent1}% , #d9777f ${percent2}%, #dadae5 ${percent2}%)`;
}*/

/*$(document).ready(function() {  */
  /*$("#reset").click(function(e) {
    e.preventDefault();
    $("#slider-range").slider("values", [0, 1000]).tooltip("option", "content", "0:1000").tooltip("close");
  });*/
  /*
  $("#reset").onclick(function(e) {
    e.preventDefault();
    $("#rangeslider").slider("values", [0, 300000]).tooltip("option", "#content-slide", "0:1000").tooltip("close");
  });
});*/


/*
document.getElementById('reset').onclick = function(){
  document.getElementById('leftrangeslider').value = 0;/*bodySlider*//*
  document.getElementById('slider-5').value = -20;/*leftArmSlider*/
  // .... etc
/*};*/
