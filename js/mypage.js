requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'calendar' : 'lib/zabuto_calendar',
        'd3' : 'lib/d3.min',
        'radialProgress' : 'lib/radialProgress',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',

		'isotope' : 'ui/isotope',
        'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
        'rolling' : 'ui/rolling',
        'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
        'tab' : 'ui/tab',
		'myPage' : 'ui/mypage',
		'sns' : 'ui/sns',
		'selectUl' : 'ui/selectUl',
		'etc' : 'ui/etc',
		'layout' : 'ui/layout',
		'progress' : 'ui/progress',
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
		 , 'isotope' : {
            deps : ["jquery"],
            exports: 'isotope'
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
        , 'calendar' : {
            deps : ["jquery"],
            exports : 'calendar'
        }
        , 'myPage' : {
            deps : ["jquery"],
            exports : 'myPage'
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
		, 'layout' : {
            deps : ["jquery"],
            exports : 'layout'
        }
		, 'progress' : {
            deps : ["jquery"],
            exports : 'progress'
        }
		, 'd3' : {
            deps : ["jquery"],
            exports : 'd3'
        }
		, 'radialProgress' : {
            deps : ["jquery"],
            exports : 'radialProgress'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }


    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'myPage', 'calendar','tab','sns','selectUl','etc','slide','scrollBar','isotope','layout','progress','d3','radialProgress'],function($,shopping, gnb, rolling, mainTop, sideBar, myPage, calendar, tab, sns, selectUl, etc, slide, scrollBar, isotope, layout, progress, d3, radialProgress){
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
	layout.init();
	progress.init();
    myPage.init();

})