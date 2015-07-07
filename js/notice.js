requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',

        'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
        'rolling' : 'ui/rolling',
        'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
		'sns' : 'ui/sns',
		'selectUl' : 'ui/selectUl',
		'isotope' : 'ui/isotope',
		'noticeLayout' : 'ui/noticeLayout',
		'slide' : 'ui/slide',

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
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		, 'selectUl' : {
            deps : ["jquery"],
            exports : 'selectUl'
        }
		, 'isotope' : {
            deps : ["jquery"],
            exports : 'isotope'
        }
		, 'noticeLayout' : {
            deps : ["jquery"],
            exports : 'noticeLayout'
        }

    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'sns','slide','scrollBar','selectUl','isotope','noticeLayout'],function($,shopping, gnb, rolling, mainTop, sideBar, sns, slide, scrollBar, selectUl, isotope, noticeLayout){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    sns.init();
    selectUl.init();
	slide.init();
	noticeLayout.init();
	
})