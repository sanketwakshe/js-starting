//Number

const score = 40
// console.log(40);

const balance = new Number(100.444444444)
// console.log(balance);
//output :[Number:40]
 
// console.log(balance.toString().length)  // output:3
// console.log(balance.toFixed(2))  //output: 100.44

const onum = 123.8888
// console.log(onum.toPrecision(3));  //output :124

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-In'));

// *****************************************************
//Math M capital
//Math.random()  => 0 to 1
//Math.random()*10+1
//console.log(Math.floor(Math.random()*6)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+max)  //math add mg 20 + random also in min


