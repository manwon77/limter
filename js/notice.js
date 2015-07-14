requirejs.config({    
    baseUrl: '../js',    

    paths: {
        'jquery' : 'lib/jquery-1.10.2.min',
        'easing' : 'lib/jquery.easing.1.3',
        'scrollBar' : 'lib/jquery.mCustomScrollbar.concat.min',		// 스크롤 플러그인

        'shopping' : 'ui/shopping',				// 상품 업다운, 
        'gnb' : 'ui/gnb',						// 전체메뉴 
        'rolling' : 'ui/rolling',				// 전체메뉴 롤링
        'sideBar' : 'ui/sideBar',				// 사이드바
		'sns' : 'ui/sns',						// 상단 아이콘열림(페이스북, 트위터 등)
		'selectUl' : 'ui/selectUl',				// 상품 선택
		'isotope' : 'ui/isotope',				// 마트모아 소식 컨텐츠 정렬
		'noticeLayout' : 'ui/noticeLayout',		// 마트모아 소식 컨텐츠 정렬
		'slide' : 'ui/slide',					// 좌우 슬라이드, On/Off 볼 움직임, 아코디언메뉴
		'formTag' : 'ui/formTag',				// 체크박스, 라디오 버튼 이미지 변환
		'scroll' : 'ui/scroll'

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
		, 'formTag' : {
            deps : ["jquery"],
            exports : 'formTag'
        }
		, 'scroll' : {
            deps : ["jquery"],
            exports : 'scroll'
        }

    }
});



define(['jquery','shopping','gnb', 'rolling','sideBar', 'sns','slide','scrollBar','selectUl','isotope','noticeLayout','formTag','scroll'],function($,shopping, gnb, rolling, sideBar, sns, slide, scrollBar, selectUl, isotope, noticeLayout, formTag, scroll){
    shopping.init();
    gnb.init();
    rolling.init();
    sideBar.init();
    sns.init();
    selectUl.init();
	slide.init();
	noticeLayout.init();
	formTag.init();
	scroll.init();
	
})