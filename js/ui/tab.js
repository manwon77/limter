define(['jquery','easing'],function($,easing){
	var tab = {
		init : function(){

			$(".tab_cnt").hide();
			$(".tab_cnt:first").show();

			$(".pro_tab > ul > li").click(function () {
				$(".pro_tab > ul > li").removeClass("active");

				$(this).addClass("active");
				$(".tab_cnt").hide();
				var activeTab = $(this).attr("rel");
				$("#" + activeTab).show()
			}),	

			$(".pop_tab > ul > li").click(function () {
				$(".pop_tab > ul > li").removeClass("active");

				$(this).addClass("active");
				$(".tab_cnt").hide();
				var activeTab = $(this).attr("rel");
				$("#" + activeTab).show()
			})	

		}
		
	}
	return tab;
});

	