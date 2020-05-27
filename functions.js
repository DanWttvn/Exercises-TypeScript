// (param:paramType):returnType
function getSum(num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
function getName(fname, lname) {
    if (lname == undefined) {
        return fname;
    }
    return fname + " " + lname;
}
console.log(getName("John"));
function myVoid() {
    return;
}
