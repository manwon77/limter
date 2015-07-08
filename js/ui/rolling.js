define(['jquery'],function($){
	var roll = {
		init : function(){
			var obj = $(".rolling ");			
			this.list = obj.find(".rollCont > img");
			this.btn = obj.find(".rollNavi > a");
			this.dx = 182;
			this.cnt = 0;
			this.oldCnt = 0;
			this.speed = 800;
			this.flag = 0;
			
			for( var i = 0; i < this.list.length; i++ ){				
				this.btn.eq(i).data({"idx" : i});
			}
			this.list.css({ "z-index" : 1 });
			this.list.eq(this.cnt).css({ "z-index" : 10 });

			this.btn.on("click", $.proxy( this.moveRoll, this ) );

		}
		, moveRoll : function( e ){
			if( !this.flag ){
				this.flag = 1;
				var idx = $(e.currentTarget).data("idx");
				this.cnt = idx;
				if( this.cnt == this.oldCnt )return false;			
				var oldCnt = this.oldCnt;
				var cnt = this.cnt;
				var that = this;

				this.list.css({"z-index" : 1});
				this.list.eq(oldCnt).css({ "z-index" : 9 });
				this.list.eq(cnt).css({"left" : this.dx, "z-index" : 10 });

				this.btn.removeClass("active");
				this.btn.eq(cnt).addClass("active");

				this.list.eq(this.cnt).animate(
					{"left" : 0}
					, this.speed
					, function(){
						that.oldCnt = that.cnt;
						that.flag = 0;
					}
				)
			}
			e.preventDefault();
		}


	}

	return roll;
});