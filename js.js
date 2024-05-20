function ShowNav() {
    document.getElementById("nav").style.width = "80%";
    document.getElementById("close").style.display = "block";
}
function HideNav() {
    document.getElementById("nav").style.width = "0%";
    document.getElementById("close").style.display = "none";
}
// Slide
var newImageSlide = [
    "https://www.hay8811.com/server/upload/images/20230603/4137dc45ba376b4f76907b9005da4739.jpg?v=20240419",
    "https://www.hay8811.com/server/upload/images/20230602/6157a79789452ae519452e68cf4e178e.jpg?v=20240419",
    "https://www.hay8811.com/server/upload/images/20230602/3dd88c2b2b77d7c8764e07d2a6fdb423.jpg?v=20240419",
];
var slide = document.querySelectorAll(".main_slide img");
slide.forEach(function(img, index) {
    img.src = newImageSlide[index];
});
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 500,
    center: true,
    items: 1,
    margin: 10,
})

// Change Pic
var newImageSources = [
    "./img/Pic1.png",
    "./img/Pic2.png",
    "./img/Pic3.png",
    "./img/Pic4.png",
    "./img/Pic5.png",
    "./img/Pic6.png",
    "./img/Pic7.png",
    "./img/Pic8.png",
];
var images = document.querySelectorAll(".pic img");
images.forEach(function(img, index) {
    img.src = newImageSources[index];
});

var newAdr = "./img/1.png";
var imgAdr = document.querySelectorAll(".adr img");
imgAdr.forEach(function(img) {
    img.src = newAdr;
});