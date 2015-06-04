define(['jquery','easing'],function($,easing){
	var sideBar = {
		init : function(){
			var btn = $(".asideBtn");
			this.layer = $(".asdLayer");
			this.closeBtn = $(".asd_close");
			this.dx = this.layer.outerWidth(true);//사이드바 넓이가 55		
			this.oldLayer = null;
			
			this.layer.show();
			this.layer.css({"left" : 0});

			btn.on("click", $.proxy( this.slideLayer, this ) );
			this.closeBtn.on("click", $.proxy( this.offSlide, this ) );
		}
		, slideLayer : function( e ){
			var tar = $(e.currentTarget.hash);
			var that = this;
			if( this.oldLayer ){
				if(tar.attr("id") == this.oldLayer.attr("id")) return false;
				this.oldLayer.animate(
					{"left" : 0}
					, "800"
					, "easeOutBack"
					, function(){

					}
				);
			}
			tar.animate(
				{"left" : this.dx*-1}
				, "800"
				, "easeOutBack"
				, function(){
					that.oldLayer = tar;
				}
			)
			e.preventDefault();
		}
		, offSlide : function( e ){
			this.oldLayer = null;
			var par = $(e.currentTarget).parents(".asdLayer");

			par.animate(
				{"left" : 0}
				, "800"
				, "easeOutBack"
				, function(){

				}
			);
			e.preventDefault();
		}


	}
	return sideBar;
});