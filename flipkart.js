// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // // Thumbnail image controls
// // function currentSlide(n) {
// //   showSlides(slideIndex = n);
// // }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
 
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

$(function() {
  var container = $('.carouuuuuu');
  var items = $('.items');
  var button = $('.next');
  var itemWidth = $('.a1').outerWidth(true);
  var visibleItems = Math.floor(container.width() / itemWidth);

  button.on('click', function() {
    var currentMargin = parseInt(items.css('margin-left'), 10);
    var newMargin = currentMargin - itemWidth * visibleItems;

    if (newMargin < -itemWidth * (items.children().length - visibleItems)) {
      newMargin = -itemWidth * (items.children().length - visibleItems);
    }

    items.animate({
      marginLeft: newMargin
    }, 500);
  });
});
