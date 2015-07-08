requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		
        'slide' : 'ui/slide',				// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴
        'formTag' : 'ui/formTag'			// 폼관련

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
		, 'formTag' : {
            deps : ["jquery"],
            exports : 'formTag'
        }
		
    }
});



define(['jquery','slide','formTag'],function($, slide, formTag){

    slide.init();
    formTag.init();

}) 