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
function menuToggleNew() {
    let menuOverlay = document.querySelector('#menuOverlay');
    let displayState = menuOverlay.classList.toggle('hidden');
    console.log(displayState);
}


// STAR REVIEW
//reference: https://stackoverflow.com/questions/34102091/changing-images-src-with-event-onclick

function rating(starNumber) {
    let imgID = "star" + starNumber.toString();
    let stars = document.getElementById("starContainer").children;
    let clear;

    if(document.getElementById(imgID).getAttribute('src') ===
        "../img/star_fill.svg"){
        clear = true;
        clearRating();
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

function clearRating() {
    let stars = document.getElementById("starContainer").children;
    for (let i = 0; i < 5; i++) {
        let starDivID = stars[i].id;
        let starImgID = document.getElementById(starDivID).firstElementChild.id;
        toggleStarToOutline(starImgID);
    }
}