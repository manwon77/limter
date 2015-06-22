define(['jquery'],function($){
    var myPage = {
        init : function(){

            var eventData = [
                {"date":"2015-06-11","badge":false, "title": "123", "body":"asdasdasdtest111", "footer" : "footer test11111"},
                {"date":"2015-06-15","badge":false,"title":"234", "body":"bobobobobobotest222", "footer" : "footer test22222"}
            ];
            $('#calendarArea').zabuto_calendar({
                today : true
                , nav_icon : {
                    prev : '<img src="../images/common/btn_arr_left.png" alt="이전달" />',
                    next : '<img src="../images/common/btn_arr_right.png" alt="다음달" />'
                }
                , data : eventData
                , action : function() {
                    showDate(this.id);
                }
                , action_nav : function() {
                    showNav(this.id);
                }
                , mouseOver : function() {
                    overFnc(this.id);
                }
                , mouseOut : function() {
                    outFnc(this.id);
                }
				, weekstartson : 0
            });
        }
    };

    var showDate = function(id) {
        console.log($('#' + id).data('date'));
        console.log($('#' + id).data('hasEvent'));
    };
    var showNav = function(id) {
        console.log($('#'+ id).data('navigation'));
        console.log($('#' + id).data('to'));
    };
    var overFnc = function(id) {
        console.log($('#' + id).data('date'));
        console.log($('#' + id).data('hasEvent'));
        console.log('over');
    };
    var outFnc = function(id) {
        console.log($('#' + id).data('date'));
        console.log($('#' + id).data('hasEvent'));
        console.log('out');
    }
    return myPage;
});