//number
// string
// boolean
// undefined
// null
// symbol
// BigInt
// Data types in JavaScript
const n = 42; // Number
const string = "Hello, World!"; // String
const boolean = true; // Boolean
const undefinedValue = undefined; // Undefined
const nullValue = null; // Null
const symbolValue = Symbol("unique"); // Symbol
const bigIntValue = BigInt(123456788789567546747666445); // BigInt
const objectValue = { key: "value" }; // Object
const arrayValue = [1, 2, 3]; // Array (which is a type of object)

//console.log(typeof n)

/************************************************* */

//conversion operations
let num=null; // String that cannot be converted to a number
//console.log(typeof num)
//console.log(typeof(num))

let valueInNumber = Number(num)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
/*
let num=null;
let num="123abc";
number
string
string
number
NaN*/


/*
number
object
object
number
0*/

/***************************************************** */

let val=3
let negVal=-val
/*
console.log(negVal)
console.log(2 ** 5)  //==32
console.log(2 ** -5) //==0.03125
console.log(2/2)  //==1
console.log(2%2%2) //==0
console.log(2 / 2 / 2)  //==0.5 
*/

let str1="hello"
let str2="prabhat"
let str3=str1+str2
console.log(str3)   //helloprabhat
console.log(str1+1)  //hello1
console.log(str3 + 5)  //helloprabhat5
console.log(str3 + 2 + 3)  //helloprabhat23
console.log(2 + 3 + str3)  //  5 helloprabhat
