class ResultList extends List {

	constructor(items) {
		super(Result, items);
		
	}
	//send data drom database
writeToDb(callback){
	var a = 0, listLength = this.length;
	function callBackEach(res){
		a++;
	if(a == listLength)
		{ callback(); }
	}//end of function callBackEach

for(let result of this){
	result.insertInDb(callBackEach);
	}

}//end of function writeToDb
readAllFromDb(callback){
    this.db.readAll((data)=>{
      this.push.apply(this,data);
      callback();
    });
  }

	readAllResult(callback) {
		this.db.readAllResult((data) => {
			this.push.apply(this, data);
			console.log(data);
			callback();
		});
	}

	static get sqlQueries() {
		return {
			readAllResult: `
        SELECT id, grade FROM grade
      `
		}
	}

}