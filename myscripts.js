let moderatorSlideIndex = 1;

// Thumbnail image controls
function currentModeratorSlide(n) {
    showModeratorSlides(moderatorSlideIndex = n);
}

function showModeratorSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Moderator-Slide");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {moderatorSlideIndex = 1}
    if (n < 1) {moderatorSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[moderatorSlideIndex-1].style.display = "block";
    dots[moderatorSlideIndex-1].className += " active";
    captionText.innerHTML = dots[moderatorSlideIndex-1].alt;
}


let eventSlideIndex = 1;
showEventSlides(eventSlideIndex);

function plusSlides(n) {
    showEventSlides(eventSlideIndex += n);
}

function currentSlide(n) {
    showEventSlides(eventSlideIndex = n);
}

function showEventSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Event");
    if (n > slides.length) {eventSlideIndex = 1}
    if (n < 1) {eventSlideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[eventSlideIndex-1].style.display = "block";
}