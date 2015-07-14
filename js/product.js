requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
		'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min', // 스크롤 플러그인
        
		'rolling' : 'ui/rolling',			// 전체메뉴 롤링
		'shopping' : 'ui/shopping',			// 상품 업다운, 
        'gnb' : 'ui/gnb',					// 전체메뉴 
        'sideBar' : 'ui/sideBar',			// 사이드바
		'sns' : 'ui/sns',					// 상단 아이콘열림(페이스북, 트위터 등)
        'tab' : 'ui/tab',					// 탭
		'selectUl' : 'ui/selectUl',			// 상품 선택
		'etc' : 'ui/etc',					//	썸네일 , 장바구니 담기 버튼 체인지, 수량 업다운
		'slide' : 'ui/slide',				// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴
		'scroll' : 'ui/scroll'				// 스크롤

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
		, 'scrollBar' : {
            deps : ["jquery"],
            exports : 'scrollBar'
        }
		, 'scroll' : {
            deps : ["jquery"],
            exports : 'scroll'
        }
		
    }
});



define(['jquery','shopping','gnb', 'rolling', 'sideBar', 'tab','sns','selectUl','etc','slide','scrollBar','scroll'],function($,shopping, gnb, rolling, sideBar, tab, sns, selectUl, etc, slide, scrollBar, scroll){
    shopping.init();
    gnb.init();
    rolling.init();
    sideBar.init();
    tab.init();
    sns.init();
    selectUl.init();
	etc.init();
	slide.init();
	scroll.init();

})