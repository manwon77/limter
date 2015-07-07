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
		'sns' : 'ui/sns',
        'tab' : 'ui/tab',
		'selectUl' : 'ui/selectUl',
		'etc' : 'ui/etc',
		'fixLayer' : 'ui/fixLayer',
		'slide' : 'ui/slide'

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
		, 'tab' : {
            deps : ["jquery"],
            exports : 'tab'
        }
		, 'sns' : {
            deps : ["jquery"],
            exports : 'sns'
        }
		, 'selectUl' : {
            deps : ["jquery"],
            exports : 'selectUl'
        }
		, 'etc' : {
            deps : ["jquery"],
            exports : 'etc'
        }
		, 'slide' : {
            deps : ["jquery"],
            exports : 'slide'
        }
		, 'fixLayer' : {
            deps : ["jquery"],
            exports : 'fixLayer'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		
    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'tab','sns','selectUl','etc','slide','scrollBar','fixLayer'],function($,shopping, gnb, rolling, mainTop, sideBar, tab, sns, selectUl, etc, slide, scrollBar, fixLayer){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    tab.init();
    sns.init();
    selectUl.init();
	etc.init();
	slide.init();
	fixLayer.init();
	
})