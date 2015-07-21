define(['jquery','easing'],function($){
	var slide = {
		init : function(){
			
			// 0721 start
			$.fn.itemSlide = function(options){
				var defaults = {
					cntWrap : " div > div > ul",
					cntWidth : 290,
					cntWidth1 : 580,
				}

				options = $.extend(defaults, options);
				return this.each(function(){
					var o = options;
					var wrap = $(this);
					var thumbListSize = 3;
					var prev = wrap.find('.pro_prev');
					var next = wrap.find('.pro_next');
					var prev1 = wrap.find('.prev');
					var next1 = wrap.find('.next');
					var cntWrap = wrap.find(o.cntWrap);
					var cntThumb = cntWrap.find(' > li');
					var cntWidth = o.cntWidth;
					var cntWidth1 = o.cntWidth1;
					var maxSize = cntThumb.size();
					cntWrap.data("current", 0)

					next.on('click',function( e ){
						var tar = $(e.currentTarget).parent().find(".bx_viewport > ul");
						var current = tar.data("current")
						if (current < maxSize-3) current++;
						tar.data("current", current);
						listMove( tar );
					});
					prev.on('click',function( e ){
						var tar = $(e.currentTarget).parent().find(".bx_viewport > ul");
						var current = tar.data("current");
						if (current > 0) current--;
						tar.data("current", current);
						listMove( tar );
					});

					next1.on('click',function( e ){
						var tar1 = $(e.currentTarget).parent().find(".bx_viewport > ul");
						var current = tar1.data("current")
						if (current < maxSize-4) current++;

						console.log(current);
						tar1.data("current", current);
						listMove1( tar1 );

					});
					prev1.on('click',function( e ){
						var tar1 = $(e.currentTarget).parent().find(".bx_viewport > ul");
						var current = tar1.data("current");
						if (current > 0) current--;
						tar1.data("current", current);
						listMove1( tar1 );
					});
					
					function listMove( tar ){
						var current = tar.data("current");
						var tl = cntWidth * current * -1;
						tar.stop().animate({left:tl}, {duration:300, easing:'easeOutCubic'});

					}

					function listMove1( tar1 ){
						var current = tar1.data("current");
						var tl = cntWidth1 * current * -1;
						tar1.stop().animate({left:tl}, {duration:300, easing:'easeOutCubic'});
					}
				});
			};
			$(".thumbList").itemSlide({cntWrap : " div > ul", cntWidth : 290});  
			// 0721 end

			// ball
			this.swWrap = $(".switchWrap > .switch");
			this.txt = this.swWrap.find("> span");
			this.ball = this.swWrap.find("> a");
			this.ball.on("click", $.proxy( this.ballOn, this ) );

			// accordion
			this.btn = $(".accBtn");
			this.tar = $(".accCnt");
			this.btn.on("click", $.proxy( this.accordion, this ) );
			for (var i = 0; i < this.btn.length; i++ ){
				this.btn.eq(i).data("index", i);
				this.tar.eq(i).data("index", i);
			}

			// accordion - img
			this.accBtn = $(".frmBtn");
			this.accTar = $(".frmCnt");
			this.accBtn.on("click", $.proxy( this.accImgOn, this ) );
			for (var i = 0; i < this.accBtn.length; i++ ){
				this.accBtn.eq(i).data("index", i);
				this.accTar.eq(i).data("index", i);
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

		// accordion
		, accordion : function( e ){
			var idx = $(e.currentTarget).data("index")
				, Layer = this.tar.eq(idx)
				, isopen = Layer.is(":visible")? true : false;
				
			if(!isopen){
				this.tar.removeClass("active");
				this.tar.slideUp();
				Layer.addClass("active");
				Layer.slideDown();
			}else{
				this.tar.removeClass("active");
				this.tar.slideUp();
			}

		}
		, accImgOn : function(e){
			var idx = $(e.currentTarget).data("index")
				, Layer = this.accTar.eq(idx)
				, isopen = Layer.is(":visible")? true : false;
				
			if(!isopen){
				this.accTar.removeClass("active");
				this.accTar.slideUp();
				Layer.addClass("active");
				Layer.slideDown();
			}else{
				this.accTar.removeClass("active");
				this.accTar.slideUp();
			}
		}
		
		
	}
	return slide;
})

