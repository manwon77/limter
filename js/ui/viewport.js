define(['jquery', "ui/isotope.pkgd"],function($, isotope){
    var viewPort = {

        init : function(){

            //���� �ػ� (1280)
            //�ִ� �ػ� (������ �̹���6��)
            //�ڽ� �ϳ��� 290;

            this.obj = $(".grid");
            this.boxSize = 290;
            this.winSize = $(window).width();
            this.thumbList = $(".thumbList > ul");


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
            this.thumbList.css({ "width" : wid, "overflow": "hidden" ,"height" : "276px"});
            this.obj.css({"width":wid, "margin": "0 auto"});
        }
    }

    return viewPort;

});