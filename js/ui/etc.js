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

			// form check
			// this.btn.off( "click", $.proxy( this.intCheck, this ) ).on( "click", $.proxy( this.intCheck, this ) );

			// 주문내역 팝업
			this.orderClose = $(".order_close");
			this.orderTar = $(".order_cnt");
			this.orderClose.on("click", $.proxy( this.martClose, this ) );

			for (var i = 0; i < this.orderClose.length; i++ ){
				this.orderClose.eq(i).data("index", i);
				this.orderTar.eq(i).data("index", i);
			}

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

		// form check
		, intCheck : function( e ){
			
			$('.checkImg').on('click',function(){
				$('.checkImg').attr('src','images/common/bg_check1.gif');
				$(this).attr('src','images/common/bg_check1.gif');

			});
			
		}

		// 주문내역 팝업
		, martClose : function(e){

			var idx = $(e.currentTarget).data("index")
				, Layer = this.orderTar.eq(idx)
				, isopen = Layer.is(":visible")? true : false;

			if (!isopen){
				this.orderTar.removeClass('active');
				this.orderTar.slideUp();
				this.orderClose.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_on.gif","_off.gif"));
				this.orderClose.find(">a>span").text("닫기");
				Layer.addClass('active');
				Layer.slideDown();
				Layer.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_off.gif","_on.gif"));
				Layer.find(">a>span").text("열기");
			}else{
				this.orderTar.removeClass('active')
				this.orderTar.slideUp();
				this.orderClose.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_off.gif","_on.gif"));
				this.orderClose.find(">a>span").text("열기");
			}

		}

	}

	return etc;
})

