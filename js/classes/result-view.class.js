class ResultView extends Base {

	constructor(propertyValues) {
		super(propertyValues);
		$("#content").empty();

		var resultList = new ResultList();

		resultList.readAllResult(() => {
			console.log("Read from DB", resultList);
			resultList.display('#content');

			var ig = 0;
			var g = 0;
			var vg = 0;
			var sum = 0;

			for (var result of resultList) {
				console.log('Grade', result);
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

			$('#content').append('<p>IG: ' + ig + '</p>');
			$('#content').append('<p>G: ' + g + '</p>');
			$('#content').append('<p>VG: ' + vg + '</p>');

			$('#content').append('<p>Average: ' + avg + '</p>');
		});

	}

}