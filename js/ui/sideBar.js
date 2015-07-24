define(['jquery','easing','scrollBar'],function($,easing){
	var sideBar = {
		init : function(){
			var btn = $(".asideBtn");
			this.layer = $(".asdLayer");
			this.closeBtn = $(".asd_close");
			this.dx = this.layer.outerWidth(true);//사이드바 넓이가 55		
			this.oldLayer = null;
			
			this.layer.show();
			this.layer.css({"left" : 0});

			btn.on("click", $.proxy( this.slideLayer, this ) );
			this.closeBtn.on("click", $.proxy( this.offSlide, this ) );
			
			var $intVal = $('.intVal');

			$intVal.on('click focus', function () {
				$(this).siblings('label').hide()
			});

			$intVal.on('blur', function () {
				$this = $(this);
				if ($.trim($this.val()).length === 0) {
					$this.siblings('label').show()
				}
			});

			// 사이드바 알림
			var $tar = $('.asideBtn');		
			var $gotop = $('.gotop');
			
			$tar.mouseover(function(e){
				var $this = $(e.currentTarget);
				$this.addClass('active');
				$this.find('.tip').stop(true, true).fadeIn(1000);
			}).mouseout(function(e){
				var $this = $(e.currentTarget);
				$this.removeClass('active');
				$this.find('.tip').stop(true, true).fadeOut('fast');
			});
			$gotop.mouseover(function(e){
				var $this = $(e.currentTarget);
				$this.addClass('active');
				$this.find('.tip').stop(true, true).fadeIn(1000);
			}).mouseout(function(e){
				var $this = $(e.currentTarget);
				$this.removeClass('active');
				$this.find('.tip').stop(true, true).fadeOut('fast');
			});
			
		}
		, slideLayer : function( e ){
			var tar = $(e.currentTarget.hash);
			var that = this;
			if( this.oldLayer ){
				if(tar.attr("id") == this.oldLayer.attr("id")) return false;
				this.oldLayer.animate(
					{"left" : 0}
					, 800
					, "easeOutQuart"
					, function(){

					}
				);
			}
			tar.animate(
				{"left" : this.dx*-1}
				, 800
				, "easeOutQuart"
				, function(){
					that.oldLayer = tar;
				}
			)
			e.preventDefault();
		}
		, offSlide : function( e ){
			this.oldLayer = null;
			var par = $(e.currentTarget).parents(".asdLayer");

			par.animate(
				{"left" : 0}
				, "800"
				, "easeOutQuart"
				, function(){

				}
			);
			e.preventDefault();
		}
	
	}
	return sideBar;
});