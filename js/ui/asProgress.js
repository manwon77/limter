define(['jquery','easing'],function($,easing){
	var asProgress = {
		init : function(){

			// 도넛로딩
			$('.pie_progress').asPieProgress({
				namespace: 'pie_progress'
			});

			// Example with grater loading time - loads longer
			$('.pie_progress--slow').asPieProgress({
				namespace: 'pie_progress',
				goal: 1000,
				min: 0,
	하이미디어컴퓨터학원			max: 1000,
				speed: 500,
				step:1,
				easing: 'linear',
				onStart: function(){}
			});

			// Example with grater loading time - loads longer
			$('.pie_progress--countdown').asPieProgress({
				namespace: 'pie_progress',
				easing: 'linear',
				first: 120,
				max: 120,
				goal: 0,
				speed: 500, // 120 s * 1000 ms per s / 100
				onStart: function(){},
				numberCallback: function(n){
					var minutes = Math.floor(this.now/60);
					var seconds = this.now % 60;
					if(seconds < 10) {
						seconds = '0' + seconds;
					}
					return minutes + ': ' + seconds;
				}
			});
			$('.pie_progress').asPieProgress('start');

			
			this.loadingTar = $(".bg2");
			if (this.loadingTar.hasClass("active")){
				this.loadingTar.removeClass("active");
				this.loadingTar.animate(
					{"height":0}	
					, 1000
					, function(){
						
					}
				)
			}else{
				this.loadingTar.addClass("active");
				this.loadingTar.animate(
					{"height":168}	
					, 1000
					
				)
			}
			
		}

	}
	return asProgress;
});

	