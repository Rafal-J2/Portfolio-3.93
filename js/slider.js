import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'


const flutterSlider = {
    autoplay: true,
	centeredSlides: true,
	coverflowEffect: {
		rotate: 50,
		depth: 250,
	},
	effect: 'coverflow',
	loopedSlides: 1,

	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true,
	// },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  pagination: {
		el: ".swiper-pagination",
	  },

	slidesPerView: 'auto',
  }

  
const cssSlider = {
	autoplay: true,
	initialSlide: 1,
	centeredSlides: true,
	coverflowEffect: {
		rotate: 25,
		depth: 50,
	},
	
	effect: 'coverflow',
	loopedSlides: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	slidesPerView: 'auto',
}


new Swiper('.mySwiperFlutter', flutterSlider);
new Swiper('.mySwiperCss', cssSlider);




