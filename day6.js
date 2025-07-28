/*

*/
let str="We are dev"
var res=str.split(" ") //splits the string according to give parameter and splits the string accordingly and changes it to array 
console.log(res);
res=str.split("") //splits the string according to give parameter and splits the string accordingly and changes it to array 
console.log(res)
console.log(res.length);


/*
Print the sliced string
input:Hi prepbytes
output: prepbytes
*/
var inp="Hi prepbytes"
console.log(inp.slice(2));

/*
  Array
========
ordered list of values that you refer to wuth a name and an index
ordered list of values of continuous memory location
*/
//3 ways to assign it
var arr=new Array(1,2,3,4,5,6)
var arr=Array(1,2,3,4,5,6)
var arr=[1,2,3,4,5,6]
console.log(arr.length);
arr.push(9) //pushes element in the last of the array
console.log(arr.length);
console.log(arr.slice(1,6));
console.log(arr.toString()); //converts array to string



