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

			// 도넛로딩
			$('.pie_progress').asPieProgress({
				namespace: 'pie_progress'
			});

			// Example with grater loading time - loads longer
			$('.pie_progress--slow').asPieProgress({
				namespace: 'pie_progress',
				goal: 1000,
				min: 0,
				max: 1000,
				speed: 200,
				easing: 'linear'
			});

			// Example with grater loading time - loads longer
			$('.pie_progress--countdown').asPieProgress({
				namespace: 'pie_progress',
				easing: 'linear',
				first: 120,
				max: 120,
				goal: 0,
				speed: 1200, // 120 s * 1000 ms per s / 100
				numberCallback: function(n){
					var minutes = Math.floor(this.now/60);
					var seconds = this.now % 60;
					if(seconds < 10) {
						seconds = '0' + seconds;
					}
					return minutes + ': ' + seconds;
				}
			});
			/*
			$('.pie_progress').on('mouseover', function(){
				$('.pie_progress').asPieProgress('start');
			});
			*/
			/*
			$('.pie_progress').asPieProgress();
			*/
			/*
			setTimeOut(function(){ 
				$('.pie_progress').load(
			} );
			*/
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
	return order;
});

	