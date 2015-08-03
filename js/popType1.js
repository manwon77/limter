requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',		// 스크롤 플러그인

		'scroll' : 'ui/scroll',			// 스크롤	
		'etc' : 'ui/etc',		// 상품 업다움
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
		, 'etc' : {
            deps : ["jquery"],
            exports : 'etc'
        } 


    }
});



define(['jquery','scrollBar','scroll','order','formTag', 'etc'],function($,scrollBar, scroll,order, formTag, etc){

    scroll.init();
    order.init();
    formTag.init();
    etc.init();
    
})