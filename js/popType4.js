requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		
        'slide' : 'ui/slide',
        'selectUl' : 'ui/selectUl'

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