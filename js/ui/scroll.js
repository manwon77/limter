define(['jquery','easing'],function($,easing){
	var scroll = {
		init : function(){
			
			$(".scrBar").mCustomScrollbar({
				theme:"light",
				mouseWheelPixels:300	
			})
		}
		
	}
	return scroll;
});

	