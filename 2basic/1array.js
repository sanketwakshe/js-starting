const myArray = [0,1,2,3,4,5];
const myHero = ['sanket','sanika'];
//console.log(myArray[3]);

// Array method
// myArray.push(6)
// myArray.pop(6)

// myArray.unshift(9) ;
// myArray.shift();

// console.log(myArray.includes(3)); //==>true
// console.log(myArray.indexOf(3));

// const newArr = myArray.join()

// console.log(newArr)

// console.log(myArray);

//slice splice
console.log('A',myArray)
const myn1 = myArray.slice(1,3) //=>output [1,2]
console.log(myn1);

console.log('B', myArray);
const myn2 = myArray.splice(1,3); //=>1 to 3 drop and remaning all  0,4,5
// => main array are splice and given output will be 0,4,5
// console.log('c', myArray);
// console.log(myn2);



