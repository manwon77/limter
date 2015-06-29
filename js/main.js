requirejs.config({    
    baseUrl: 'js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',

        'isotope'  : 'ui/isotope',
        'viewPort' : 'ui/viewPort',
        'shopping' : 'ui/shopping',
        'gnb'      : 'ui/gnb',
        'rolling'  : 'ui/rolling',
        'mainTop'  : 'ui/mainTop',
        'sideBar'  : 'ui/sideBar',
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
        , 'viewPort' : {
            deps : ["jquery","isotope"],
            exports: 'viewPort'
        }

		, 'sns' : {
            deps : ["jquery"],
            exports : 'sns'
        }


    }
});



define(['jquery', 'isotope', 'shopping','gnb', 'rolling', 'mainTop', 'sideBar', 'sns','viewPort'],function($, isotope ,shopping, gnb, rolling, mainTop, sideBar, sns, viewPort){
    shopping.init();
    gnb.init();
    rolling.init();
    mainTop.init();
    sideBar.init();
    sns.init();
    viewPort.init();
})