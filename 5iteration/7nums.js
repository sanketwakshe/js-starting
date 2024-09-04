const myNum = [1,2,3,4,5,6,7,8,9]

const newNum = myNum.map((num) =>num + 10);
//console.log(newNum);

const newNum1 = myNum
.map((num)=> num*10)               // chaning value depend upon the 1 to 2
.map((num)=> num + 1)
.filter((num)=> num>=40)
                                   
console.log(newNum1);
 
 

