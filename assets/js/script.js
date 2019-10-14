$(document).ready(function() {
  var w = window.innerWidth;

  if (w > 767) {
    $("#menu-jk").scrollToFixed();
  } else {
    $("#menu-jk").scrollToFixed();
  }
});

$(document).ready(function() {
  $("#home-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 5000,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

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

$(document).ready(function() {
  $(".filter-button").click(function() {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

function goToModal(title) {
  $('#title-modal').text(title);
  $('#content-modal').text('PLATAFORMA DE SOPORTE A LA GESTIÓN AGRÍCOLA Es una solución integral y modular para todos los procesos de la gestión agrícola adaptable a cualquier cultivo tanto para pequeños fundos como grandes extensiones de tierra brindándote información en linea y procesada para el análisis de todo lo que ocurre en el campo y posterior toma de decisiones.');
}