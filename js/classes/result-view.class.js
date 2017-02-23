class ResultView extends Base {

  constructor(propertyValues){
    super(propertyValues);
     $("#content").empty();

		var resultList = new ResultList();

				resultList.readAllResult(() => {
					console.log("Read from DB", resultList);
					resultList.display('#content');
				});

		
}

}