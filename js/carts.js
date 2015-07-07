requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',
        
		'rolling' : 'ui/rolling',
		'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
		'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
		'order' : 'ui/order',
		'slide' : 'ui/slide',
		'sns' : 'ui/sns',

    },
    shim: {
        'jquery' : {
            exports: '$'
        }
        , 'easing' : {
            deps : ["jquery"],
             exports: 'easing'
        }
        , 'shopping' : {
            deps : ["jquery"],
            exports: 'shopping'   
        }
        , 'gnb' : {
            deps : ["jquery"],
            exports: 'gnb'   
        }
        , 'mainTop' : {
            deps : ["jquery"],
            exports: 'mainTop'  
        }
        , 'sideBar' : {
            deps : ["jquery"],
            exports: 'sideBar'  
        }
		, 'sns' : {
            deps : ["jquery"],
            exports : 'sns'
        }
		, 'slide' : {
            deps : ["jquery"],
            exports : 'slide'
        }
		, 'order' : {
            deps : ["jquery"],
            exports : 'order'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		
    }
});

define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'sns','slide','scrollBar','order'],function($,shopping, gnb, rolling, mainTop, sideBar, sns, slide, scrollBar, order){

    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    sns.init();
	order.init();
	slide.init();

})

