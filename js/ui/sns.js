define(['jquery','easing'],function($,easing){
	var sns = {
		init : function(){
		
			var $btn = $(".utilMenu > li > a");
			var $sns = $(".snsWrap");

			$btn.click(function (e) {
				if ($btn.hasClass("active")){
					$btn.removeClass("active");
					$sns.clearQueue().animate(
					{"opacity":"0","left" : 200}
					, "800"
					, "easeOutSine"
					, function(){

					})
					
				} else {
					$(this).addClass("active");
					$sns.clearQueue().animate(
					{"opacity":"1","left" : -195}
					, "800"
					, "easeOutSine"
					, function(){
						$sns.show();
					})
				}
				e.preventDefault();
			});
		}
	}
	return sns;
});

