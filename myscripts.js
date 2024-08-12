let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    //showSlides1(n);
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

function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("profile");
    let realSlideLength = slides.length -1
    
    switch (n){
        case -1:
            let idLeft = slides[0].getAttribute('id');
            console.log(idLeft);
            document.getElementById(idLeft).style.order += slides.length;
            console.log(document.getElementById(idLeft).style.order);
            break;
        case 1:
            let idRight = slides[slides.length - 1].getAttribute('id');
            console.log(idRight);
            document.getElementById(idRight).style.order -= slides.length;
            console.log(document.getElementById(idRight).style.order);
            break;
        default:
            console.log("somethings wrong");
    }
 /*   
    if (slideIndex > n) {
        let id = slides[slides.length].getAttribute('id');
        console.log(id);
        id.style.order -= slides.length.toString();
    } else if (slideIndex < n) {
        let id = slides[0].getAttribute('id');
        console.log(id);
        id.style.order += slides.length.toString();
    } else { console.log("somethings wrong"); }
/*/
    slideIndex = n;
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