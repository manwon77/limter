define(['jquery','easing'],function($,easing){
	var sns = {
		init : function(){
		
			var $btn = $(".topLink > a");
			var $sns = $(".snsWrap");
			var $ico = $(".snsWrap > a");

			$btn.click(function (e) {
				if ($sns.hasClass("active")){
					$sns.removeClass("active");
					$sns.clearQueue().animate(
					{"right" : 0}
					, "800"
					, "easeOutSine"
					, function(){
						//$sns.hide();
					})
					
				} else {
					$sns.addClass("active");
					$sns.clearQueue().animate(
					{"right" : 39}
					, "800"
					, "easeOutSine"
					, function(){
						//$sns.show();
					})
				}
				e.preventDefault();
			});
		}
	}
	return sns;
});



