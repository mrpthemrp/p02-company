let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    if(slideIndex === 0){document.getElementsByClassName("carousel-item")[0].style.display = "block"}
    let slides = document.getElementsByClassName("carousel-item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
'use strict';

// FSM VARIABLES
let state = 0;

// MENU THINGS
function menuToggleNew() {
    let menuBtn = document.querySelector('#menuBtn');
    menuBtn.classList.toggle("hidden");
    menuLookToggle(menuBtn);
}

function menuLookToggle(x) {
    x.classList.toggle("change");
    if (state === 0) {
        state = 1;
    } else {
        state = 0;
    }
}
