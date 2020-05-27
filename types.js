// cmd: tsc types.ts --> creates js file
// tsc types.ts -w  --> watch mode
// export {}; // so it doesnt give me an error interfeering with the js
var myString;
var myNum;
var myBool;
/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/
// or:
var strArr;
var numArr;
var boolArr;
var strNumTuple;
myString = "hello world" + "concadenated";
myNum = -22 + 1.5;
myBool = true;
strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, false];
strNumTuple = ["Hello", 4];
var myVoid = null;
var myNull = null;
var myUndefined = undefined;
console.log(myVoid);
