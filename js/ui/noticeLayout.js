define(['jquery', "ui/isotope.pkgd"],function($, isotope){
    var noticeLayout = {
        init : function(){

		  var $notice = $('.notice_cnt > div > ul');

		  $notice.isotope({
			itemSelector: '.item',
			columnWidth:'220'
		  });

		}
	}
	return noticeLayout;
});

