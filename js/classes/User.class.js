class User extends Class {
	//create constuctor with argument
	constructor(userId , firstname , surname , role){
		super(className);
		this.userId = userId;
		this.firstname = firstname;
		this.surname = firstname;
		this.role = role;
	}
	//getter
	get userId(){
		return this.userId;
	}
	get firstname(){
		return this.firstname;
	}
	get surname(){
		return this.surname;
	}
	get role(){
		return this.role;
	}
	//setter
	set userId(userId){
		this.userId = userId;
	}
	set firstname(firstname){
		this.firstname = firstname;
	}
	set surname(surname){
		this.surname = surname;
	}
	set role(role){
		this.role = role;
	}
}//end of class User