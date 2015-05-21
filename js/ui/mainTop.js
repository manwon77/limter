define(['jquery','easing'],function($,easing){
	var mainTop = {
		init : function(){			
			var btn = $(".close");
			this.tar = $(".topContents");
			this.dy = this.tar.outerHeight(true);
			btn.on("click", $.proxy(this.sladeLAyer, this ) );

		}
		, sladeLAyer : function( e ){
			this.tar.animate(
				{"margin-top" : this.dy*-1}
				,"800"
				, "easeOutBack"
			)
		}
	}


	return mainTop;
});