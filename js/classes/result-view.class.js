class ResultView extends Base {

  defaultPropertyValues(){
    return {
      result: new ResultList()
    }
  }

  constructor(propertyValues = {}){
    super(propertyValues);
  }

}