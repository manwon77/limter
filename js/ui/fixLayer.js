define(['jquery','easing'],function($,easing){
	var fixLayer = {
		init : function(){

			// fixedLayer
			this.element1 = $(".allmenuWrap");
			this.element2 = $(".home_wrap");
			this.bg = $(".fixedLine");
			
			this.elementOffsetTop1 = this.element1.offset().top;
			this.elementOffsetTop2 = this.element2.offset().top;

			this.win = $(window);
			this.win.on( "scroll", $.proxy( this.fixedLayer, this ) );
		}
		
		, fixedLayer : function(){
			var isClass = this.element1.hasClass("open");
			if( isClass ) return;

			var scrollTop = this.win.scrollTop();

			if( scrollTop > this.elementOffsetTop1 ){
				this.element1.css({ "position" : "fixed", "top" : 0 ,"left":0, "z-index":"1000"});
			}else{
				this.element1.css({ "position" : "relative", "top" : "-87px", "left":"-88px" });
			}

			if( scrollTop > this.elementOffsetTop2 ){
				this.element2.css({ "position" : "fixed", "top" : 19,"z-index":"800" });
				this.bg.show();
			}else{
				this.element2.css({ "position" : "static", "top" : "" });
				this.bg.hide();
			}
			
		}
		
	}
	return fixLayer;
});
	
	