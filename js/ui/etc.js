define(['jquery','easing','scrollBar'],function($){
	var etc = {
		init : function(){

			// 썸네일
			var thumbnail = $('.img_hover > .photo');
			var container = thumbnail.find('> ul');
			var thumb = container.find('> li');
			var image = $('.img_hover > .photo > .pho_img > p');
			
			// 장바구니 담기 버튼 체인지
			this.btn = $('.putBtns > .put_ty1 > a');
			this.btnView = $('.putBtns > .put_ty2');
			this.btn.off( "click", $.proxy( this.putBtn, this ) ).on( "click", $.proxy( this.putBtn, this ) );
						
			// 수량 업다운
			var tar = $(".putBtns");
			var btnGroup = $(".put_ty2");
			var plusBtn = tar.find(".plus");
			var minusBtn = tar.find(".minus");

			btnGroup.data({"cnt" : 0});
			plusBtn.off( "click", $.proxy( this.add,this ) ).on( "click", $.proxy( this.add,this ) );
			minusBtn.off( "click", $.proxy( this.remove,this ) ).on( "click", $.proxy( this.remove,this ) );
			
			// 썸네일  
			thumb.off().on('mouseover', function(){
				image.css('display', 'none');
				var i = $(this).index();
				image.eq(i).css('display', 'block');
			});

			// 스크롤
			$(".scrBar").mCustomScrollbar();

			// form radio
			// this.btn.off( "click", $.proxy( this.intRadio, this ) ).on( "click", $.proxy( this.intRadio, this ) );
			
			// form check
			// this.btn.off( "click", $.proxy( this.intCheck, this ) ).on( "click", $.proxy( this.intCheck, this ) );

			// 여닫
			this.orderClose = $('.order_close > a');
			this.orderClose.off( "click", $.proxy( this.martClose, this ) ).on( "click", $.proxy( this.martClose, this ) );
		

		}

		// 장바구니 담기 버튼 체인지
		, putBtn : function(){
			this.btn.parent().css('display','none');
			this.btnView.css('display','block');
		}
		
		// 수량 업다운
		, add : function( e ){
			var par = $(e.currentTarget).parent(".put_ty2");
			var item = par.find(".item"); 
			var data = par.data("cnt"); 
			data++;
			par.data({ "cnt" : data });
			item.text( data );

		}
		, remove : function( e ){
			var par = $(e.currentTarget).parent(".put_ty2");
			var item = par.find(".item");
			var data = par.data("cnt");			
			if( data > 0 ){
				data--;
				par.data({ "cnt" : data });
				item.text( data );
			}
		}

		/*
		// form radio
		, intRadio : function( e ){
			$('input[name="ra1"]').each(funtion(){
				this.checked = true;
			});
		}
		*/
		// form check
		, intCheck : function( e ){
			
			$('.checkImg').on('click',function(){
				$('.checkImg').attr('src','images/common/bg_check1.gif');
				$(this).attr('src','images/common/bg_check1.gif');

			});
			
		}
		// cart view 닫기
		, martClose : function(e){
			this.btn = $('.order_table').find('.order_close');
			var tar = $('.order_table').find('.order_cnt');

			if (tar.attr('class').match(/active/) != "active"){
				tar.addClass('active');
				this.btn.find('a img').attr('src', this.btn.find('a img').attr("src").replace("_on.gif","_off.gif"));
				tar.slideUp();
				this.btn.find(">a>span").text("열기");
			}else{
				tar.removeClass('active')
				this.btn.find('a img').attr('src', this.btn.find('a img').attr("src").replace("_off.gif","_on.gif"));
				tar.slideDown();
				this.btn.find(">a>span").text("닫기");
			}

		}

	}

	return etc;
})

