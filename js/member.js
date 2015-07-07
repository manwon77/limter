requirejs.config({    
    baseUrl: '../../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',

        'shopping' : 'ui/shopping',
        'gnb' : 'ui/gnb',
        'rolling' : 'ui/rolling',
        'mainTop' : 'ui/mainTop',
        'sideBar' : 'ui/sideBar',
        'selectUl' : 'ui/selectUl',
		'sns' : 'ui/sns',
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
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }


    }
});



define(['jquery','shopping','gnb', 'rolling', 'mainTop', 'sideBar','sns','selectUl','etc','slide','scrollBar',],function($,shopping, gnb, rolling, mainTop, sideBar, sns, selectUl, etc, slide, scrollBar){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    sns.init();
    selectUl.init();
	etc.init();
	slide.init();

})