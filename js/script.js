$(document).ready(function () {
	// $('.service__box-info').hide();
	$('.service__box-info:not(.service__box-info:first)').hide();
	$('.service__box .service__arrow:first').addClass('rotate');
	$('.service__box').click(function () {
		$(this).children('.service__arrow').toggleClass('rotate');
		$('.service__box').not(this).children('.service__arrow').removeClass('rotate');
		$(this).siblings('.service__box-info').slideToggle('fast');
		$('.service__box').not(this).siblings('.service__box-info').hide('fast');
	});
});

$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		navText: [],
		responsive: {
			0: {
				items: 1,
			}
		}
	});
	const Search = document.querySelector('.banner__form');
	const body = document.querySelector('body');
	Search.addEventListener('click', function (event) {
		event.stopPropagation();
		this.classList.add('banner__form--active');
	});
	body.addEventListener('click', function (event) {
		event.stopPropagation();
		Search.classList.remove('banner__form--active');
	});
});