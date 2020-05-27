// cmd: tsc types.ts --> creates js file
// tsc types.ts -w  --> watch mode
// export {}; // so it doesnt give me an error interfeering with the js

let myString: string;
let myNum: number;
let myBool: boolean;

/*
let strArr: string[];
let numArr: number[];
let boolArr: boolean[];
*/
// or:
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

let strNumTuple: [string, number]


myString = "hello world" + "concadenated"
myNum = -22 + 1.5
myBool = true;

strArr = ["Hello", "World"]
numArr = [1, 2, 3]
boolArr = [true, false, false]

strNumTuple = ["Hello", 4]

let myVoid: void = null
let myNull: null = null
let myUndefined: undefined = undefined


console.log(myVoid); 
