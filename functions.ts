// (param:paramType):returnType

function getSum(num1:number, num2:number):number {
	if(typeof num1 == "string") {
		num1 = parseInt(num1)
	}

	if(typeof num2 == "string") {
		num2 = parseInt(num2)
	}

	return num1 + num2
}


function getName(fname:string, lname?:string):string { //param? = not required
	if(lname == undefined) {
		return fname
	}
	return fname + " " + lname;
}
console.log(getName("John"));

function myVoid(): void {
	return;
}
