requirejs.config({    
    baseUrl: '../../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',

        'shopping' : 'ui/shopping',		// 상품 업다운, 
        'gnb' : 'ui/gnb',				// 전체메뉴 
        'rolling' : 'ui/rolling',		// 전체메뉴 롤링
        'sideBar' : 'ui/sideBar',		// 사이드바
        'selectUl' : 'ui/selectUl',		// 상품 선택
		'sns' : 'ui/sns',				// 상단 아이콘열림(페이스북, 트위터 등)
		'etc' : 'ui/etc',				//	썸네일 , 장바구니 담기 버튼 체인지, 수량 업다운
		'slide' : 'ui/slide'			// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴

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



define(['jquery','shopping','gnb', 'rolling', 'sideBar','sns','selectUl','etc','slide','scrollBar',],function($,shopping, gnb, rolling, sideBar, sns, selectUl, etc, slide, scrollBar){
    shopping.init();
    gnb.init();
    rolling.init();
    sideBar.init();
    sns.init();
    selectUl.init();
	etc.init();
	slide.init();

})