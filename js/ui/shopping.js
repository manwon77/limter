define(['jquery'],function($){
	var shopping = {
		init : function(){
			var tar = $(".thumInfo");
			var cent = $(".discountInfo");
			var btnGroup = $(".act");
			var plusBtn = tar.find(".plus");
			var minusBtn = tar.find(".minus");

			btnGroup.data({"cnt" : 0});

			tar.off( "mouseenter", $.proxy( this.emerge,this ) ).on( "mouseenter", $.proxy( this.emerge,this ) );
			tar.off( "mouseleave", $.proxy( this.disappear,this ) ).on( "mouseleave", $.proxy( this.disappear,this ) );

			cent.off( "mouseenter", $.proxy( this.centOn,this ) ).on( "mouseenter", $.proxy( this.centOn,this ) );
			cent.off( "mouseleave", $.proxy( this.centOff,this ) ).on( "mouseleave", $.proxy( this.centOff,this ) );

			plusBtn.off( "click", $.proxy( this.add,this ) ).on( "click", $.proxy( this.add,this ) );
			minusBtn.off( "click", $.proxy( this.remove,this ) ).on( "click", $.proxy( this.remove,this ) );

		}
		, emerge : function( e ){
			var current = $(e.currentTarget);
			var target = current.find(".thumOver");
			var countBox = target.next();
			//var priceBox = current.find(".priceComp");			
			target.show();
			countBox.hide();
			//priceBox.show();
		}
		, disappear : function( e ){
			var current = $(e.currentTarget);
			var target = current.find(".thumOver");
			var countBox = target.next();
			//var priceBox = current.find(".priceComp");
			var item = target.find(".item");
			var cnt = item.text();
			target.hide();
			//priceBox.hide();

			if(cnt){
				countBox.text( cnt );
				countBox.show();
			}
						
		}
		, centOn : function ( e ){
			var current = $(e.currentTarget);
			var priceBox = current.next(".priceComp");
			priceBox.show();
		}
		, centOff : function ( e ){
			var current = $(e.currentTarget);
			var priceBox = current.next(".priceComp");
			priceBox.hide();
		
		}
		, add : function( e ){
			var par = $(e.currentTarget).parents(".act");
			var item = par.prev();
			var data = par.data("cnt");			
			data++;
			par.data({ "cnt" : data });
			item.text( data );
		}
		, remove : function( e ){
			var par = $(e.currentTarget).parents(".act");
			var item = par.prev();
			var data = par.data("cnt");			
			if( data > 0 ){
				data--;
				par.data({ "cnt" : data });
				item.text( data );
			}
		}
	}


	 return shopping;
});