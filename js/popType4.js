requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		
        'slide' : 'ui/slide',				// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴
        'selectUl' : 'ui/selectUl'			// 상품 선택

    },
    shim: {
        'jquery' : {
            exports: '$'
        }
        , 'easing' : {
            deps : ["jquery"],
             exports: 'easing'
        }
		, 'slide' : {
            deps : ["jquery"],
            exports : 'slide'
        }
		, 'selectUl' : {
            deps : ["jquery"],
            exports : 'selectUl'
        }
		
    }
});



define(['jquery','slide','selectUl'],function($, slide, selectUl){

    slide.init();
    selectUl.init();
 
})