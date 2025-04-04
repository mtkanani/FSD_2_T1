//method-1
// var data=require("./om.js");
// console.log(data(5,10));
//method-2
// var {a,m}=require("./om.js");
// console.log(a(5,10),m(5,10));
//method-3
// var {add,mul,name}=require("./om.js");
// console.log(add(5,10),mul(5,10),name);
//method-4
var {add,mul}=require("./om.js");
console.log(add(5,10),mul(5,10));