define(['jquery'],function($){
    var progress = {
        init : function(){

			var div3=d3.select(document.getElementById('div3'));

			start();

			function onClick3() {
				deselect();
				div3.attr("class","selectedRadial");
			}

			function labelFunction(val,min,max) {

			}

			function deselect() {
				div3.attr("class","radial");
			}

			function start() {

				var rp3 = radialProgress(document.getElementById('div3'))
						.label("RADIAL 3")
						.diameter(466) // 원 그림
						.minValue(0)
						.maxValue(100) 
						.value(50) // 퍼센티지 값
						.render();

			}

		}
	}
	return progress;
});

