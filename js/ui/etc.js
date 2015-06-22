define(['jquery','easing'],function($){
	var etc = {
		init : function(){

			var $btn = $(".img_hover > .photo > ul > li > a");
			var $over = $(".img_hover > .photo > .pho_img");
			
			$btn.off( "mouseenter", $.proxy( this.imgHover, this ) ).on( "mouseenter", $.proxy( this.imgHover, this ) );

			$btn.hover(
				function(e){
					$(this).
				}	
			)
			
		}
		

			/*
			var gnb = $(".col .dep2List >li > a");
			var twoTabs = $(".dep3_Layer");
			var allmenu = $(".allmenu");

			this.menuAside = $(".menuAside > ul > li > a");
			this.menuLayars = $(".menuLayerWrap > div");			

			gnb.off( "mouseenter", $.proxy( this.activeGnb, this ) ).on( "mouseenter", $.proxy( this.activeGnb, this ) );
			gnb.off( "mouseleave", $.proxy( this.normal, this ) ).on( "mouseleave", $.proxy( this.normal, this ) );

			twoTabs.off( "mouseenter", $.proxy( this.activeGnb, this ) ).on( "mouseenter", $.proxy( this.activeGnb, this ) );
			twoTabs.off( "mouseleave", $.proxy( this.normal, this ) ).on( "mouseleave", $.proxy( this.normal, this ) );

			this.menuAside.off( "click", $.proxy( this.classifyMenu, this ) ).on( "click", $.proxy( this.classifyMenu, this ) );
			allmenu.off("click", $.proxy( this.showAllmenu, this ) ).on("click", $.proxy( this.showAllmenu, this ) );
			*/

		}
		/*
		, showAllmenu : function( e ){
			var allmenuLayer = $("#AllmenuLayer");
			if( $(e.currentTarget).attr("class").match(/open/) != "open" ){
				$(e.currentTarget).addClass("open");				
				allmenuLayer.show();
			}else{
				$(e.currentTarget).removeClass("open");				
				allmenuLayer.hide();
			}			
			e.preventDefault();
		}
		, activeGnb : function( e ){
			var parent = $(e.currentTarget).parent();
			var layer;
			if( e.currentTarget.tagName == "A" ){
				layer = $(e.currentTarget).next();				
			}else{
				layer = $(e.currentTarget);
			}			
			layer.show();
			parent.addClass("active");

		}
		, normal : function( e ){
			var parent = $(e.currentTarget).parent();
			var layer;
			if( e.currentTarget.tagName == "A" ){
				layer = $(e.currentTarget).next();				
			}else{
				layer = $(e.currentTarget);
			}
			layer.hide();
			parent.removeClass("active");
		}
		, classifyMenu : function( e ){
			this.menuAside.parent().removeClass("on");
			$(e.currentTarget).parent().addClass("on");
			this.menuLayars.hide();
			$(e.currentTarget.hash).show();
			e.preventDefault();
		}
		*/
	}

	return etc;
})