import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
	speed: 400,
	loop: true,

	modules: [Navigation, Pagination],

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-btn--next',
		prevEl: '.swiper-btn--prev',
	},

	effect: 'coverflow',
});
