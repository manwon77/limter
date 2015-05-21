define(['jquery','easing'],function($,easing){
	var sideBar = {
		init : function(){
			var btn = $(".asideBtn");
			this.layer = $(".asdLayer");
			this.closeBtn = $(".asd_close");
			this.dx = this.layer.outerWidth(true);			
			this.oldLayer = null;
			
			this.layer.show();
			this.layer.css({"left" : 0});

			btn.on("click", $.proxy( this.slideLayer, this ) );
			this.closeBtn.on("click", $.proxy( this.offSlide, this ) );
		}
		, slideLayer : function( e ){
			var tar = $(e.currentTarget.hash);
			if( this.oldLayer ){

			}

			tar.animate(
				{"left" : this.dx-1}
				, "800"
				, "easeOutBack"
				, function(){

				}
			)
		}
		, offSlide : function( e ){

		}

	}
	return sideBar;
});