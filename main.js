
$(document).ready(function() {
  // Smooth scroll to section
  $('a[href^="#"]').on('click', function(event) {
      var target = $($(this).attr('href'));
      if (target.length) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 800);
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on the scroll position
window.addEventListener('scroll', function() {
if (window.pageYOffset > 300) {
scrollToTopBtn.style.display = 'block';
} else {
scrollToTopBtn.style.display = 'none';
}
});

// Scroll to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
});

// Slider
$(document).ready(function(){
  $('.slider').slick({
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>'
  });
});






      
        
      