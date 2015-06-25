define(['jquery','easing','bxSlider'],function($){
	var slide = {
		init : function(){
			
			var current = 0;
			var thumbListSize = 3;
			var wrap = $('.pro_tab');
			var prev = wrap.find('.pro_prev');
			var next = wrap.find('.pro_next');
			var cntWrap = wrap.find('> div > div > ul'); 
			var cntThumb = cntWrap.find(' > li');
			var cntWidth = cntThumb.outerWidth(true);
			var maxSize = cntThumb.size();
			
			next.on('click',function(){
				if (current < maxSize / thumbListSize -1 ) current++;
				listMove();
			});
			prev.on('click',function(){
				if (current > 0) current--;
				listMove();
			});

			function listMove(){
				var tl = cntWidth * current * -1;
				cntWrap.stop().animate({left:tl}, {duration:300, easing:'easeOutCubic'});
			}
			
		}
	}
	return slide;
})