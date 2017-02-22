class Grade extends User{
	//create constuctor with argument
	constructor(id , grade){
		super(userId);
		this.id = id;
		this.grade = grade;
	}
	//getter
	get id(){
		return this.id;
	}
	get grade (){
		return this.grade;
	}
	//setter
	set id(id){
		this.id = id;
	}
	set grade (grade){
		this.grade = grade;
	}
}//end of class Grade