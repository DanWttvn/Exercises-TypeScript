interface UserInterface {
	name: string;
	email: string;
	age: number;
	register();
	payInvoice();
}

class User implements UserInterface {
	/*
	public name: string;
	protected email: string;
	private age: number;
	*/

	name: string;
	email: string;
	age: number;

	constructor(name:string, email:string, age:number) {
		this.name = name;
		this.email = email;
		this.age = age;

		console.log("user Created: " + this.name);
	}

	public register() {
		console.log(this.name + " is now registered");
	}

	payInvoice() {
		console.log(this.name + " paid invoice");
	}
}

class Member extends User {
	id: number

	constructor(id: number, name:string, email:string, age:number) {
		super(name, email, age) // needs super(params of the class extended from). this is doing the this.= for us
		this.id = id;
	}

	payInvoice() {
		super.payInvoice()
	}
}


let joanna = new User("Joanna", "jdo@gmail.com", 45)

// console.log(joanna.age); // if private, it can only been accessed from within the class
// console.log(joanna.email); // if protected, you cannot acces from outside, but you can from another class that inherits this one
console.log(joanna.name);
joanna.register();


let mika: User = new Member(1, "Mika", "mik@gmail.com", 78)
mika.payInvoice()
