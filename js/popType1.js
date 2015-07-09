requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',		// 스크롤 플러그인

		'scroll' : 'ui/scroll',			// 스크롤	
		'formTag' : 'ui/formTag',		// 체크박스, 라디오 버튼 이미지 변환
		'order' : 'ui/order'			// 주문내역 팝업 , 장바구니 step3 주문완료 
        
    },
    shim: {
        'jquery' : {
            exports: '$'
        }
        , 'easing' : {
            deps : ["jquery"],
             exports: 'easing'
        }
		, 'scroll' : {
            deps : ["jquery"],
            exports : 'scroll'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		, 'order' : {
            deps : ["jquery"],
            exports : 'order'
        } 
		, 'formTag' : {
            deps : ["jquery"],
            exports : 'formTag'
        } 


    }
});



define(['jquery','scrollBar','scroll','order','formTag'],function($,scrollBar, scroll,order, formTag){

    scroll.init();
    order.init();
    formTag.init();
    
})