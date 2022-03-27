
 
 let slideIndex = 1;
 showSlides(slideIndex);

// Next/previous controls
 function plusSlides(n) {
 showSlides(slideIndex += n);
 }

 // Thumbnail image controls
 function currentSlide(n) {
 showSlides(slideIndex = n);
 }
 function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("slide__item");
 console.log(slides);
 let dots = document.getElementsByClassName("dot__item");
 console.log(dots)
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
     slides[i].style.display = 'none';
 }
 for (const dot of dots) {
 dot.classList.remove("dot__item--active")
 }
 console.log(slideIndex)
 slides[slideIndex - 1].style.display ='flex';
 dots[slideIndex-1].className += "dot__item--active";
 }

