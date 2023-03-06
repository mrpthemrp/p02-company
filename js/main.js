// let slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     let i;
//     if(slideIndex === 0){document.getElementsByClassName("carousel-item")[0].style.display = "block"}
//     let slides = document.getElementsByClassName("carousel-item");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     slides[slideIndex-1].style.display = "block";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// 'use strict';
//
// // FSM VARIABLES
// let state = 0;

// MENU THINGS
function menuToggle() {
    let menuOverlay = document.querySelector('#menuOverlay');
    menuOverlay.classList.toggle('hidden');
    toggleMenuLines();
}

function toggleMenuLines(){
    let line1 = document.querySelector('#menuLine1');
    let line2 = document.querySelector('#menuLine2');
    let line3 = document.querySelector('#menuLine3');

    line1.classList.toggle('transformLine1');
    line2.classList.toggle('transformLine2');
    line3.classList.toggle('transformLine3');
}


// STAR REVIEW
//reference: https://stackoverflow.com/questions/34102091/changing-images-src-with-event-onclick

function rating(starNumber,starContainer, imgID) {
    let stars = document.getElementById(starContainer).children;
    let clear;

    if(document.getElementById(imgID).getAttribute('src') ===
        "../img/star_fill.svg"){
        clear = true;
        clearRating(starContainer);
    } else{
        clear = false;
    }

    for (let i = 0; i < starNumber; i++) {
        let starDivID = stars[i].id;
        let starImgID = document.getElementById(starDivID).firstElementChild.id;

        if(clear){
            toggleStarToOutline(starImgID);
        } else {
            toggleStarToFill(starImgID);
        }
    }

}

function toggleStarToFill(starId) {
    let star = document.getElementById(starId);
    if (star.getAttribute('src') === "../img/star_outline.svg") {
        star.src = "../img/star_fill.svg";
    }
}

function toggleStarToOutline(starId) {
    let star = document.getElementById(starId);
    if (star.getAttribute('src') === "../img/star_fill.svg") {
        star.src = "../img/star_outline.svg";
    }
}

function clearRating(starContainer) {
    let stars = document.getElementById(starContainer).children;
    for (let i = 0; i < 5; i++) {
        let starDivID = stars[i].id;
        let starImgID = document.getElementById(starDivID).firstElementChild.id;
        toggleStarToOutline(starImgID);
    }
}