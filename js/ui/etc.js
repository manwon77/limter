define(['jquery','easing'],function($){
	var etc = {
		init : function(){

			// 썸네일
			var thumbnail = $('.img_hover > .photo');
			var container = thumbnail.find('> ul');
			var thumb = container.find('> li');
			var image = $('.img_hover > .photo > .pho_img > p');
			
			// 장바구니 담기 툴팁
			this.btn = $('.proTip > .views > a');
			this.btnView = $('.proTip > .priceComp');
			this.del = this.btnView.find('.del');

			this.btn.on( "click", $.proxy( this.proTip, this ) );
			this.del.on( "click", $.proxy( this.proDel, this ) );
						
			// 옵션 수량
			var tarOp = $(".choice");
			var btnOp = $(".count_ty1");
			var plusOp = tarOp.find(".plus");
			var minusOp = tarOp.find(".minus");
			var inputBox = btnOp.find("input");

			btnOp.data({"cnt" : 0});
			plusOp.off( "click", $.proxy( this.opAdd,this ) ).on( "click", $.proxy( this.opAdd,this ) );
			minusOp.off( "click", $.proxy( this.opRemove,this ) ).on( "click", $.proxy( this.opRemove,this ) );
			inputBox.off("keydown", $.proxy( this.inputAdd,this ) ).on( "keyup", $.proxy( this.inputAdd,this ) );

			// 썸네일  
			thumb.off().on('mouseover', function(){
				image.css('display', 'none');
				var i = $(this).index();
				image.eq(i).css('display', 'block');
			});
		}

		// 장바구니 담기 툴팁
		, proTip : function(){
			this.btnView.fadeIn();
		}
		, proDel : function(){
			this.btnView.fadeOut();
		}
		
		// 옵션 수량
		, opAdd : function( e ){
			var par = $(e.currentTarget).parents(".count_ty1");
			var item = par.find(".item");
			var data = par.data("cnt");	
			if ( data < 99){
				data++;
			}
			par.data({ "cnt" : data });
			item.val( data );
		}
		, opRemove : function( e ){
			var par = $(e.currentTarget).parents(".count_ty1");
			var item = par.find(".item");
			var data = par.data("cnt");			
			if( data > 0 ){
				data--;
				par.data({ "cnt" : data });
				item.val( data );
			}
		}
		, inputAdd : function( e ){
			var par = $(e.currentTarget).parents(".count_ty1");
			var data = $(e.currentTarget).val();
			par.data({ "cnt" : data });
		}
	
	}
	return etc;
})

