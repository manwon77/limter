define(['jquery','easing'],function($,easing){
	var selectUl = {
		init : function(){

			this.setTag = $(".select_bx");
			this.setList = this.setTag.find(".set_list");
			this.selectLink = this.setTag.find(" .bx > .tit > a");
			this.selectText = this.setList.find(">ul>li>a");
			this.selectTit = this.setTag.find(".tit > a")
			this.dy = [];
			
			this.setList.show();
			this.setList.css({"overflow":"hidden","position":"absolute"});
			for( var i = 0; i < this.setList.length; i++ ){
				this.dy.push( this.setList.eq(i).outerHeight(true) );
				this.selectLink.eq(i).data("index",i);
				this.setList.eq(i).data("index",i);
			}

			this.setList.height(0);
			this.selectLink.on("click", $.proxy( this.layerOn, this ) );
			this.selectText.on("click", $.proxy( this.selectOn, this ) );

		}
		, layerOn : function(e){
			var index = $(e.currentTarget).data("index");
			
			if (this.setTag.eq(index).hasClass("active")){
				this.setTag.eq(index).removeClass("active");
				this.selectLink.eq(index).find("> img").attr("src", this.selectLink.eq(index).find("img").attr("src").replace("_on.gif","_off.gif") );
				this.setList.eq(index).animate(
					{"height" : 0}
				)
			}else{
				this.setTag.eq(index).addClass("active");
				this.selectLink.eq(index).find("> img").attr("src", this.selectLink.eq(index).find("img").attr("src").replace("_off.gif","_on.gif") );
				this.setList.eq(index).animate(
					{"height" : this.dy[index]}
				)
			}
		}

		, selectOn : function(e){
			var index = $(e.currentTarget).parents(".set_list").data("index");
		
			if (this.setTag.eq(index).hasClass("active")){
				this.setTag.eq(index).removeClass("active");
				
				this.setList.eq(index).animate(
					{"height" : 0, "display":"none"}
				)
			} else {
				this.setTag.eq(index).addClass("active");
				
				this.setList.eq(index).animate(
					{"height" : this.dy[index]}
				)
			}

			// 텍스트 입력
			this.selectTit.eq(index).text( $(e.currentTarget).text() )
		}
		
	}
	return selectUl;
});
	
	
