define(['jquery','easing'],function($,easing){
	var selectUl = {
		init : function(){

			var $setTag = $(".select_bx");
			var $setList = $(".set_list");

			$(".select_bx > .bx > .tit > a").click(function (e) {  
				if ($setTag.hasClass("active")){
					$(this).parent().parent().parent().removeClass("active");
					$(this).find('img').attr("src", $(this).find('img').attr("src").replace("_on.gif","_off.gif"));
					$(this).parent().next().hide();
				}else{
					$(this).parent().parent().parent().addClass("active");
					$(this).find('img').attr("src", $(this).find('img').attr("src").replace("_off.gif","_on.gif"));
					$(this).parent().next().slideDown(300);
					
				}
				e.preventDefault();
			})

		}
		
	}
	return selectUl;
});

	