requirejs.config({    
    baseUrl: '../../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'calendar' : 'lib/zabuto_calendar',
        'bxSlider' : 'lib/jquery.bxslider.min',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',

		'isotope' : 'ui/isotope',
        'viewPort' : 'ui/viewPort',
        'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
        'rolling' : 'ui/rolling',
        'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
        'tab' : 'ui/tab',
		'myPage' : 'ui/mypage',
		'sns' : 'ui/sns',
		'selectUl' : 'ui/selectUl',
		'resolution' : 'ui/resolution',
		'etc' : 'ui/etc',
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
         , 'viewPort' : {
            deps : ["jquery", "isotope"],
            exports: 'viewPort'
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
		, 'resolution' : {
            deps : ["jquery"],
            exports : 'resolution'
        }
		, 'etc' : {
            deps : ["jquery"],
            exports : 'etc'
        }
		, 'bxSlider' : {
            deps : ["jquery"],
            exports : 'bxSlider'
        }
		, 'slide' : {
            deps : ["jquery"],
            exports : 'slide'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }


    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'myPage', 'calendar','tab','sns','selectUl','resolution','etc','slide','bxSlider','scrollBar','isotope','viewPort'],function($,shopping, gnb, rolling, mainTop, sideBar, myPage, calendar, tab, sns, selectUl, resolution, etc, slide, bxSlider, scrollBar, isotope, viewPort){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    tab.init();
    sns.init();
    selectUl.init();
    resolution.init();
	etc.init();
	slide.init();
	viewPort.init();
    myPage.init();

})