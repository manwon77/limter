define(['jquery'],function($){
	var gnb = {
		init : function(){
			var gnb = $(".col .dep2List >li > a");
			var twoTabs = $(".dep3_Layer");
			var allmenu = $(".allmenu");
			
			this.homeWrap = $(".home_wrap");
			this.mask = $(".mask_ty1");
			this.menuAside = $(".menuAside > ul > li > a");
			this.menuLayars = $(".menuLayerWrap > div");	

			gnb.off( "mouseenter", $.proxy( this.activeGnb, this ) ).on( "mouseenter", $.proxy( this.activeGnb, this ) );
			gnb.off( "mouseleave", $.proxy( this.normal, this ) ).on( "mouseleave", $.proxy( this.normal, this ) );

			twoTabs.off( "mouseenter", $.proxy( this.activeGnb, this ) ).on( "mouseenter", $.proxy( this.activeGnb, this ) );
			twoTabs.off( "mouseleave", $.proxy( this.normal, this ) ).on( "mouseleave", $.proxy( this.normal, this ) );

			this.menuAside.off( "click", $.proxy( this.classifyMenu, this ) ).on( "click", $.proxy( this.classifyMenu, this ) );
			allmenu.off("click", $.proxy( this.showAllmenu, this ) ).on("click", $.proxy( this.showAllmenu, this ) );
			

		}
		, showAllmenu : function( e ){
			var allmenuLayer = $("#AllmenuLayer");
			if( $(e.currentTarget).attr("class").match(/open/) != "open" ){
				$(e.currentTarget).addClass("open");	
				this.homeWrap.css({ "display":"none" });
				this.mask.show();
				allmenuLayer.show();
			}else{
				$(e.currentTarget).removeClass("open");	
				this.homeWrap.show();
				this.mask.hide();	
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
		, loca : function( e ){
			
		}
	}

	return gnb;
})