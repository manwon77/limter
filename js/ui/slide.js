define(['jquery','easing','bxSlider'],function($){
	var slide = {
		init : function(){
			
			//var current = 0;
			var thumbListSize = 3;
			var wrap = $('.pro_tab');
			var prev = wrap.find('.pro_prev');
			var next = wrap.find('.pro_next');
			var cntWrap = wrap.find('> div > div > ul');
			var cntThumb = cntWrap.find(' > li');
			var cntWidth = cntThumb.outerWidth(true);
			var maxSize = cntThumb.size();
			cntWrap.data("current", 0)
			
			next.on('click',function( e ){
				var tar = $(e.currentTarget).parent().find(".bx-viewport > ul");
				var current = tar.data("current")
				if (current < maxSize / thumbListSize -2 ) current++; // 수정필요
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

			// ball
			this.swWrap = $(".switchWrap > .switch");
			this.txt = this.swWrap.find("> span");
			this.ball = this.swWrap.find("> a");
			this.ball.on("click", $.proxy( this.ballOn, this ) );

			// accor
			this.btn = $(".faq > ul > li.que");
			this.tar = $(".faq > ul > li.faq_q");
			this.btn.on("click", $.proxy( this.accor, this ) );

			for (var i = 0; i < this.btn.length; i++ ){
				this.btn.eq(i).data("index", i);
				this.tar.eq(i).data("index", i);
			}

		}

		// ball
		, ballOn : function (){
			if ( this.swWrap.hasClass("active") ){
				this.txt.text("OFF");
				this.swWrap.removeClass("active");
				this.ball.animate(
					{"left" : 5}
					, 500
					, "easeOutCubic"
					
				)
			}else{
				this.swWrap.addClass("active");
				this.txt.text("ON");
				this.ball.animate(
					{"left" : 37}
					,500
					, "easeOutCubic"
					
				)
			}
		}

		// accodion
		, accor : function( e ){

			var index = $(e.currentTarget).data("index");

			if ( this.btn.hasClass("active") ){
				this.btn.eq(index).removeClass("active");
				this.tar.hide();
			}else{
				this.btn.eq(index).addClass("active");
				this.tar.show();
			}

		}

	}
	return slide;
})