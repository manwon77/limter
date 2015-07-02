define(['jquery', "ui/isotope.pkgd"],function($, isotope){
    var viewPort = {

        init : function(){

            //최저 해상도 (1280)
            //최대 해상도 (섬네일 이미지6개)
            //박스 하나당 288;
			// 메인

            this.obj = $(".main_grid");
            this.boxSize = 288;
			this.marginSize = 14;
            this.winSize = $(window).width();
            this.thumbList = $(".main_grid .thumbList > ul");
			
            this.paint();
            $(window).on("resize", $.proxy( this.paint, this ));
			
        }
        , paint : function(){
            var elementNumber =  parseInt(this.winSize / this.boxSize);
            if( elementNumber < 4 ){
                elementNumber = 4;
            }else if( elementNumber > 6 )
            {
                elementNumber = 6;
            }
            var wid = this.boxSize * elementNumber;
            this.thumbList.css({ "width" : wid, "overflow": "hidden" ,"height" : "276px", "padding-top" : "94px"});
            this.obj.css({"width":wid, "margin": "0 auto"});
        }
		
    }

    return viewPort;


});