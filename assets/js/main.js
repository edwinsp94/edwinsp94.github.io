$(document).ready(function () {
	$('#js-main-slider').pogoSlider({
		autoplay: true,
		autoplayTimeout: 8000,
		displayProgess: true,
		targetWidth: 1000,
		targetHeight: 300,
		responsive: true
	}).data('plugin_pogoSlider');
});

$(document).ready(function() {
	$(".filter-button").click(function() {
		var value = $(this).attr("data-filter");

		if (value == "all") {
			$(".filter").show("1000");
		} else {
			$(".filter").not("." + value).hide("3000");
			$(".filter").filter("." + value).show("3000");
		}
	});

	if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
});