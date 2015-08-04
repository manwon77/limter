define(['jquery','easing'],function($,easing){
	var order = {
		init : function(){

			// 주문내역 팝업
			this.orderClose = $(".order_close");
			this.orderTar = $(".order_cnt");
			this.orderClose.on("click", $.proxy( this.martClose, this ) );

			for (var i = 0; i < this.orderClose.length; i++ ){
				this.orderClose.eq(i).data("index", i);
				this.orderTar.eq(i).data("index", i);
			}

		}

		// 주문내역 팝업
		, martClose : function(e){

			var idx = $(e.currentTarget).data("index")
				, Layer = this.orderTar.eq(idx)
				, isopen = Layer.is(":visible")? true : false;

			if (!isopen){
				this.orderTar.removeClass('active');
				this.orderTar.slideUp();
				this.orderClose.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_off.gif","_on.gif"));
				this.orderClose.find(">a>span").text("닫기");
				Layer.addClass('active');
				Layer.slideDown();
				Layer.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_off.gif","_on.gif"));
				Layer.find(">a>span").text("열기");
			}else{
				this.orderTar.removeClass('active')
				this.orderTar.slideUp();
				this.orderClose.find('a img').attr('src', this.orderClose.find('a img').attr("src").replace("_on.gif","_off.gif"));
				this.orderClose.find(">a>span").text("열기");
			}
		}

	}
	return order;
});

	