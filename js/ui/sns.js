define(['jquery','easing'],function($,easing){
	var sns = {
		init : function(){
		
			var $btn = $(".utilMenu > li > .link");
			var $sns = $(".snsWrap");
			
			$btn.click(function (e) {
				if ($btn.hasClass("active")){
					$btn.removeClass("active");
					$sns.clearQueue().animate(
					{"left" : -170, "z-index":"-1"}
					, "800"
					, "easeOutSine"
					, function(){
						$sns.hide();
					})
					
				} else {
					$(this).addClass("active");
					$sns.clearQueue().animate(
					{"left" : -195, "z-index" : "1"}
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



