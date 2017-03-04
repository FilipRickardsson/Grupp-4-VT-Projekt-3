class ResultView extends Base {

	constructor(propertyValues) {
		super(propertyValues);
		$("#content").empty();

		var resultList = new ResultList();

		/* Fetches all results and presents statistics */
		resultList.readAllResult(() => {
			if (resultList.length > 0) {
				var ig = 0;
				var g = 0;
				var vg = 0;
				var sum = 0;

				for (var result of resultList) {
					if (result.grade == 'IG') {
						ig++;
					} else if (result.grade == 'G') {
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

				resultList.display('#content');
				statistics.display('#content');
			} else {
				$('#content').append('<p>No results available.</p>');
			}
		});

	}

}