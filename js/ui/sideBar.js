define(['jquery'],function($){
	var sideBar = {
		init : function(){
			var btn = $(".asideBtn");
			this.layer = $(".asdLayer");
			this.closeBtn = $(".asd_close");
			this.dx = this.layer.outerWidth(true);
			console.log(this.dx)
			this.layer.show();
			//this.layer.css({"left" : 0})
		}

	}
	return sideBar;
});