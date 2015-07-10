define(['jquery','easing'],function($,easing){
	var sns = {
		init : function(){
		
			var $btn = $(".topLink > a");
			var $sns = $(".snsWrap");
			var $ico1 = $sns.find(".ico1");
			var $ico2 = $sns.find(".ico2");
			var $ico3 = $sns.find(".ico3");
			var $ico4 = $sns.find(".ico4");

			$btn.clearQueue().click(function (e) {
				if ($sns.hasClass("active")){
					$sns.removeClass("active");
					//$sns.clearQueue().animate({"right" : 0}, "800", "easeOutSine", function(){})
					$ico1.clearQueue().animate({"right":0, "opacity":0}, 600, 'swing', function(){}),
					$ico2.clearQueue().animate({"right":0, "opacity":0}, 500, 'swing', function(){}),
					$ico3.clearQueue().animate({"right":0, "opacity":0}, 400, 'swing', function(){}),
					$ico4.clearQueue().animate({"right":0, "opacity":0}, 300, 'swing', function(){})

				} else {
					$sns.addClass("active");
					//$sns.clearQueue().animate({"right" : 39}, "800", "easeOutSine", function(){})
					$ico1.clearQueue().animate({"right":196, "opacity":1}, 600, 'swing', function(){}),
					$ico2.clearQueue().animate({"right":147, "opacity":1}, 500, 'swing', function(){}),
					$ico3.clearQueue().animate({"right":98, "opacity":1}, 400, 'swing', function(){}),
					$ico4.clearQueue().animate({"right":49, "opacity":1}, 300, 'swing', function(){})
				}
				e.preventDefault();
			});
		}
	}
	return sns;
});



