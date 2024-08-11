let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("profile");
    let realSlideLength = slides.length -1
    if (n > realSlideLength) {slideIndex = 0}
    if (n < 0) {slideIndex = realSlideLength}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (slideIndex + 1 > realSlideLength) {slides[0].style.display = "block"} 
    else {slides[slideIndex + 1].style.display = "block"}
    
    slides[slideIndex].style.display = "block";
    
    if (slideIndex < 1) {slides[realSlideLength].style.display = "block"}
    else {slides[slideIndex - 1].style.display = "block"}
}
function showSlidesSmall(n) {
    let i;
    let slides = document.getElementsByClassName("profile");
    let realSlideLength = slides.length -1
    if (n > realSlideLength) {slideIndex = 0}
    if (n < 0) {slideIndex = realSlideLength}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function plusSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("profile");
    let realSlideLength = slides.length -1
    if (n > realSlideLength) {slideIndex = 0}
    if (n < 0) {slideIndex = realSlideLength}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (slideIndex + 1 > realSlideLength) {slides[0].style.display = "block"}
    else {slides[slideIndex + 1].style.display = "block"}

    slides[slideIndex].style.display = "block";

    if (slideIndex < 1) {slides[realSlideLength].style.display = "block"}
    else {slides[slideIndex - 1].style.display = "block"}
}

function reorganizeSlides(){
    
}