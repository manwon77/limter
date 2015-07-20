requirejs.config({    
    baseUrl: 'js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		'rainbow' : 'lib/rainbow.min',								// 로딩 플러그인
		'asPie' : 'lib/jquery-asPieProgress',						// 로딩 플러그인
		'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',		// 스크롤 플러그인

		'isotope' : 'ui/isotope',
		'rolling' : 'ui/rolling',			// 전체메뉴 롤링
		'shopping' : 'ui/shopping',			// 상품 업다운, 
        'gnb' : 'ui/gnb',					// 전체메뉴 
        'sideBar' : 'ui/sideBar',			// 사이드바
		'sns' : 'ui/sns',					// 상단 아이콘열림(페이스북, 트위터 등)
        'mainTop' : 'ui/mainTop',			// 상단 공지사항
		'scroll' : 'ui/scroll',				// 스크롤
		'mainCnt' : 'ui/mainCnt',
		'asProgress' : 'ui/asProgress'		// 도넛그래프

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
         , 'sideBar' : {
            deps : ["jquery"],
            exports: 'sideBar'   
        }
		
		, 'sns' : {
            deps : ["jquery"],
            exports : 'sns'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		, 'mainTop' : {
            deps : ["jquery"],
            exports : 'mainTop'
        }
		, 'scroll' : {
            deps : ["jquery"],
            exports : 'scroll'
        }		
		, 'mainCnt' : {
            deps : ["jquery"],
            exports : 'mainCnt'
        }		
		, 'asProgress' : {
            deps : ["jquery"],
            exports : 'asProgress'
        }
		, 'rainbow' : {
            deps : ["jquery"],
            exports : 'rainbow'
        }
		, 'asPie' : {
            deps : ["jquery"],
            exports : 'asPie'
        }
    }
});



define(['jquery','shopping','gnb', 'rolling', 'sideBar','sns','mainCnt','scrollBar','mainTop','scroll','asProgress','rainbow','asPie'],function($,shopping, gnb, rolling, sideBar, sns, mainCnt, scrollBar,mainTop,scroll, asProgress, rainbox, asPie){
    shopping.init();
    gnb.init();
    rolling.init();
    sideBar.init();
    sns.init();
	mainCnt.init();
	mainTop.init();
	scroll.init();
	asProgress.init();

})