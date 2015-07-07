requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',
		
        'scroll' : 'ui/scroll',
        'tab' : 'ui/tab',

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
		, 'tab' : {
            deps : ["jquery"],
            exports : 'tab'
        }

    }
});



define(['jquery','scrollBar','scroll','tab'],function($, scrollBar, scroll, tab){

    scroll.init();
    tab.init();

})