requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		'rainbow' : 'lib/rainbow.min',								// 로딩 플러그인
		'asPie' : 'lib/jquery-asPieProgress',						// 로딩 플러그인
		'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',		// 스크롤 플러그인
        
		'rolling' : 'ui/rolling',		// 전체메뉴 롤링
		'shopping' : 'ui/shopping',		// 상품 업다운, 
        'gnb' : 'ui/gnb',				// 전체메뉴 
        'sideBar' : 'ui/sideBar',		// 사이드바
		'order' : 'ui/order',			// 주문내역 팝업, 마트별 합계금액
		'asProgress' : 'ui/asProgress',	// 장바구니 step3 주문완료
		'slide' : 'ui/slide',			// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴
		'sns' : 'ui/sns',				// 상단 아이콘열림(페이스북, 트위터 등)

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
		, 'slide' : {
            deps : ["jquery"],
            exports : 'slide'
        }
		, 'order' : {
            deps : ["jquery"],
            exports : 'order'
        }
		, 'asProgress' : {
            deps : ["jquery"],
            exports : 'asProgress'
        }
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
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

define(['jquery','shopping','gnb', 'rolling', 'sideBar', 'sns','slide','scrollBar','order','asProgress','rainbow', 'asPie'],function($,shopping, gnb, rolling, sideBar, sns, slide, scrollBar, order, asProgress, rainbow, asPie){

    shopping.init();
    gnb.init();
    rolling.init();
    sideBar.init();
    sns.init();
	order.init();
	asProgress.init();
	slide.init();

})

 