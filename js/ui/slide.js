define(['jquery','easing'],function($){
	var slide = {
		init : function(){

			/*
				var idx = $(e.currentTarget).data("index")
				, Layer = this.tar.eq(idx)
				, is
				*/
			
			//var current = 0;
			var thumbListSize = 3;
			
			var wrap = $('.pro_tab');
			var idx = wrap.size();
			
			var prev = wrap.find('.pro_prev');
			var next = wrap.find('.pro_next');
			var cntWrap = wrap.find('> div > div > ul');
			var cntThumb = cntWrap.find(' > li');
			var cntWidth = cntThumb.outerWidth(true);
			var maxSize = cntThumb.size();
			cntWrap.data("current", 0)
			
			next.on('click',function( e ){
				var tar = $(e.currentTarget).parent().find(".bx_viewport > ul");
				var current = tar.data("current")
				if (current < maxSize / thumbListSize -1 ) current++; // 수정필요
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
				//, button = this.accBtn
				, isopen = Layer.is(":visible")? true : false;
				
			if(!isopen){
				this.accTar.removeClass("active");
				this.accTar.slideUp();
				//this.accBtn.find('>img').attr('src', this.accBtn.find('>img').attr("src").replace("_on.gif","_off.gif"));
				Layer.addClass("active");
				Layer.slideDown();
				//button.find('>img').attr('src', this.accBtn.find('>img').attr("src").replace("_off.gif","_on.gif"));
			}else{
				this.accTar.removeClass("active");
				this.accTar.slideUp();
				//this.accBtn.find('>img').attr('src', this.accBtn.find('>img').attr("src").replace("_on.gif","_off.gif"));
			}
		}
		
	}
	return slide;
})

