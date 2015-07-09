define(['jquery','easing'],function($,easing){
	var formTag = {
		init : function(){
			
			// 체크박스
			this.sp = $(".btnChk"); 
			this.sp.off("click", $.proxy( this.intCheck, this ) ).on( "click", $.proxy( this.intCheck, this ) ); 

			// 팝업 라이도 버튼
			this.rdo = $(".btnRdo");
			this.rdoTar = $(".custom_check > label");
			this.rdo.on( "click", $.proxy( this.intRadio, this ) ); 
			for ( var i = 0 ; i < this.rdo.length ; i++ ){
				this.rdo.eq(i).data("index", i);
				this.rdoTar.eq(i).data("index", i);
			}
			// 약관 라디오버튼
			this.rdoBtn = $(".btnRdo_ty1");
			this.rdoTar = $(".custom_radio > label");
			this.rdoBtn.on( "click", $.proxy( this.intRadioTy1, this ) ); 
			for ( var i = 0 ; i < this.rdoBtn.length ; i++ ){
				this.rdoBtn.eq(i).data("index", i);
				this.rdoTar.eq(i).data("index", i);
			}
		}

		, intCheck : function( e ){
			var $this = $(e.currentTarget);
			
			if ( $this.hasClass("on") ){
				$this.removeClass("on");
				$this.find("> input").prop("checked", false);
			}else{
				$this.addClass("on");
				$this.find("> input").prop("checked", true);
			}
		}
		
		, intRadio : function( e ){
			var idx = $(e.currentTarget).data("index")
				, Layer = this.rdo.eq(idx)
				, isopen = Layer.is(":checked")? true : false;
				
			if(!isopen){
				this.rdo.removeClass("on");
				this.rdo.find(">input").prop("checked", false);
				Layer.addClass("on");
				Layer.find(">input").prop("checked", true);
			}else{
				this.rdo.removeClass("on");
				this.rdo.find(">input").prop("checked", false);
			}
		}

		, intRadioTy1 : function( e ){
			var idx = $(e.currentTarget).data("index")
				, Layer = this.rdoBtn.eq(idx)
				, isopen = Layer.is(":checked")? true : false;
				
			if(!isopen){
				this.rdoBtn.removeClass("on");
				this.rdoBtn.find(">input").prop("checked", false);
				Layer.addClass("on");
				Layer.find(">input").prop("checked", true);
			}else{
				this.rdoBtn.removeClass("on");
				this.rdoBtn.find(">input").prop("checked", false);
			}
		}

	}
	return formTag;
});



