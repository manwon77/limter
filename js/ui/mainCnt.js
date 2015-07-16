define(['jquery','easing'],function($,easing){
	var mainCnt = {
		init : function(){
			var btn = $(".leftOn");
			this.layer = $(".leftLayer");
			this.closeBtn = $(".leftClose");
			this.oldLayer = null;
			
			this.layer.show();
			this.layer.css({"left" : -500});

			btn.on("click", $.proxy( this.slideLayer, this ) );
			this.closeBtn.on("click", $.proxy( this.offSlide, this ) );
			
			// 메인 롤링
			$.fn.itemSlide = function(options){
				var defaults = {
					cntWrap : " div > ol",
					cntWidth : 300,
				}

				options = $.extend(defaults, options);
				return this.each(function(){
					var o = options;
					var wrap = $(this);
					var thumbListSize = 3;
					var prev = wrap.find('.prev');
					var next = wrap.find('.next');
					var cntWrap = wrap.find(o.cntWrap);
					var cntThumb = cntWrap.find(' > li');
					var cntWidth = o.cntWidth;
					var maxSize = cntThumb.size();
					cntWrap.data("current", 0)

					next.on('click',function( e ){
						var tar = $(e.currentTarget).parents(".step3").find(".mbox > ol");
						var current = tar.data("current")
						if (current < maxSize-1) current++;
						tar.data("current", current);
						listMove( tar );
					});
					prev.on('click',function( e ){
						var tar = $(e.currentTarget).parents(".step3").find(".mbox > ol");
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
				});
			};
			$(".step3").itemSlide({cntWrap : " div > ol", cntWidth : 300}); 

		}
		, slideLayer : function( e ){
			var tar = $(e.currentTarget.hash);
			var that = this;
			if( this.oldLayer ){
				if(tar.attr("id") == this.oldLayer.attr("id")) return false;
				this.oldLayer.animate(
					{"left" : -500}
					, "800"
					, "easeOutQuart"
					, function(){

					}
				);
			}
			tar.animate(
				{"left" : 644}
				, "800"
				, "easeOutQuart"
				, function(){
					that.oldLayer = tar;
				}
			)
			e.preventDefault();
		}
		, offSlide : function( e ){
			this.oldLayer = null;
			var par = $(e.currentTarget).parents(".leftLayer");

			par.animate(
				{"left" : -500}
				, "800"
				, "easeOutQuart"
				, function(){

				}
			);
			e.preventDefault();
		}

	}
	return mainCnt;
});