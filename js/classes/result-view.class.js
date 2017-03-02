class ResultView extends Base {

	constructor(propertyValues) {
		super(propertyValues);
		$("#content").empty();

		var resultList = new ResultList();

		resultList.readAllResult(() => {
			resultList.display('#content');

			var ig = 0;
			var g = 0;
			var vg = 0;
			var sum = 0;

			for (var result of resultList) {
				if (result.grade == 'ig') {
					ig++;
				} else if (result.grade == 'g') {
					g++;
				} else {
					vg++;
				}
				sum += result.points;
			}

			var avg = sum / resultList.length;
			
			var statistics = new Statistics();
			statistics.ig = ig;
			statistics.g = g;
			statistics.vg = vg;
			statistics.avg = avg;
			statistics.display('#content');
		});

	}

}