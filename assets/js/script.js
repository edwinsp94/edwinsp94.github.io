$(document).ready(function() {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    $("#menu-jk").scrollToFixed();
  }

  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [992, 1],
    itemsTablet: [768, 1],
    pagination: false,
    navigation: true,
    navigationText: ["", ""],
    autoPlay: true
  });
});

function goToModal(title, subtitle, resume) {
  $('#title-modal').text(title);
  $('#content-modal-subtitle').text(subtitle);
  $('#content-modal-resume').text(resume);
}