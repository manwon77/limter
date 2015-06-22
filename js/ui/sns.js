define(['jquery','easing'],function($,easing){
	var sns = {
		init : function(){
		
			var $btn = $(".utilMenu > li > a");
			var $sns = $(".snsWrap").css("border","1px solid red");

			$btn.click(function (e) {
				if ($btn.hasClass("active")){
					$btn.removeClass("active");
					$sns.clearQueue().animate(
					{"opacity":"0","left" : 200}
					, "800"
					, "easeOutSine"
					, function(){
						$sns.hide();
					})
					
				} else {
					$(this).addClass("active");
					$sns.clearQueue().animate(
					{"opacity":"100","left" : -195}
					, "800"
					, "easeOutSine"
					, function(){
						$sns.show();
					})
				}
			});
		}
	}
	return sns;
});

