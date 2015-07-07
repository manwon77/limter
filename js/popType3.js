requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		
        'slide' : 'ui/slide',
        'formTag' : 'ui/formTag'

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