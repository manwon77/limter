requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'pie'    : 'lib/PIE',
        'calendar' : 'lib/zabuto_calendar',

        'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
        'rolling' : 'ui/rolling',
        'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
        'tab' : 'ui/tab',
		'myPage' : 'ui/mypage',
		'sns' : 'ui/sns'

    },
    shim: {
        'jquery' : {
            exports: '$'
        }
        , 'easing' : {
            deps : ["jquery"],
             exports: 'easing'
        }
        , 'pie' : {
            deps : ["jquery"],
            exports: 'pie'
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

    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'myPage', 'calendar','tab','sns'],function($,shopping, gnb, rolling, mainTop, sideBar, myPage, calendar, tab, sns){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    tab.init();
    sns.init();

    myPage.init();
})