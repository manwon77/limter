define(['jquery','easing'],function($,easing){
	var selectUl = {
		init : function(){

			this.setTag = $(".select_bx");
			this.setList = this.setTag.find(".set_list");
			this.selectLink = this.setTag.find(" .bx > .tit > a");
			this.selectText = this.setList.find(">ul>li>a");
			this.selectTit = this.setTag.find(".tit > a");
			this.dy = [];
			
			this.setList.hide();
			this.setList.css({"position":"absolute"});
			for( var i = 0; i < this.setList.length; i++ ){
				this.dy.push( this.setList.eq(i).outerHeight(true) );
				this.selectLink.eq(i).data("index",i);
				this.setList.eq(i).data("index",i);
			}

			this.setList.height(0);
			this.selectLink.on("click", $.proxy( this.layerOn, this ) );
			this.selectText.on("click", $.proxy( this.selectOn, this ) );

			// fixedLayer
			this.element1 = $(".allmenuWrap");
			this.element2 = $(".home_wrap");
			this.bg = $(".fixedLine");
			
			this.elementOffsetTop1 = this.element1.offset().top;
			this.elementOffsetTop2 = this.element2.offset().top;

			this.win = $(window);
			this.win.on( "scroll", $.proxy( this.fixedLayer, this ) );
		}
		, layerOn : function(e){
			var index = $(e.currentTarget).data("index");
			
			if (this.setTag.eq(index).hasClass("active")){
				this.setTag.eq(index).removeClass("active");
				this.setList.eq(index).hide();
				this.setList.eq(index).animate(
					{"height" : 0}
					, 300
					, function(){
						
					}
				)
				
			}else{
				this.setTag.eq(index).addClass("active");
				this.setList.eq(index).show();
				this.setList.eq(index).animate(
					{"height" : this.dy[index]}
					, 300
					
				)

			}
		}

		, selectOn : function(e){
			var index = $(e.currentTarget).parents(".set_list").data("index");

			if (this.setTag.eq(index).hasClass("active")){
				this.setTag.eq(index).removeClass("active")
				this.setList.eq(index).hide();
				this.setList.eq(index).animate(
					{"height" : 0}
					, 300
					, function(){
						
					}
				)
			}else{
				this.setTag.eq(index).addClass("active");
				this.setList.eq(index).show();
				this.setList.eq(index).animate(
					{"height" : this.dy[index]}
					, 300
				)
			}

			// 텍스트 입력
			this.selectTit.eq(index).text( $(e.currentTarget).text() )
			
		}
		
		, fixedLayer : function(){
			var isClass = this.element1.hasClass("open");
			if( isClass ) return;

			var scrollTop = this.win.scrollTop();

			if( scrollTop > this.elementOffsetTop1 ){
				this.element1.css({ "position" : "fixed", "top" : 0 ,"left":0, "z-index":"1000"});
			}else{
				this.element1.css({ "position" : "relative", "top" : "-87px", "left":"-88px" });
			}

			if( scrollTop > this.elementOffsetTop2 ){
				this.element2.css({ "position" : "fixed", "top" : 19,"z-index":"800" });
				this.bg.show();
			}else{
				this.element2.css({ "position" : "static", "top" : "" });
				this.bg.hide();
			}
			
		}
		
	}
	return selectUl;
});
	
	