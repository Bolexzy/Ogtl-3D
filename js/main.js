const panorama = new PANOLENS.ImagePanorama("images/oraimo.jpeg");
const Container = document.querySelector('.pano-img');
let slideIndex = 1;

const viewer = new PANOLENS.Viewer({
    container: Container,
    autoRotate: true,
    autoRotateSpeed: 0.4
});

showSlides(slideIndex);
viewer.add(panorama);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

