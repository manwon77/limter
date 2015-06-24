define(['jquery','easing','bxSlider'],function($){
	var slide = {
		init : function(){

			$('.slider4').bxSlider({
				
				slideWidth: 276,
				minSlides: 2,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 16,
				
			});

				/*
				$('.bxslider').bxSlider({
				  nextSelector: '#slider-next',
				  prevSelector: '#slider-prev',
				  nextText: 'Onward →',
				  prevText: '← Go back'
				});
				*/
			
		}
	}
	return slide;
})