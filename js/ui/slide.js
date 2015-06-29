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
			cntWrap.data("current", 0);
			
			next.on('click',function( e ){
				var tar = $(e.currentTarget).parent().find(".bx-viewport > ul");
				var current = tar.data("current")
				if (current < maxSize / thumbListSize -1 ) current++;
				tar.data("current", current);
				listMove( tar );
			});
			prev.on('click',function( e ){
				var tar = $(e.currentTarget).parent().find(".bx-viewport > ul");
				var current = tar.data("current");
				if (current > 0) current--;
				tar.data("current", current);
				listMove( tar );
			});

			function listMove( tar ){
				var current = tar.data("current");
				var tl = cntWidth * current * -1;
				tar.stop().animate({left:tl}, {duration:300, easing:'easeOutCubic'});
			}
			
		}
	}
	return slide;
})