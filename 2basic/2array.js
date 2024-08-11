const heros =["sanket","om","sahil"]
const boys =["mahesh","atharv","ayush"]

//  boys.push(heros)    //=> returns only to arry name
// console.log(boys);

//concat()
// const array1 = heros.concat(boys)
// console.log(array1);    //  => Easly add two array

//spread()
// const array2 = [...heros,...boys]
// console.log(array2);   //=> Easly add two array and many time use spead...,...

//****************************** 
//flat()
// const array3 = [1,2,3,4,[1,2,],5,[1,2,3,4],4,[1,2,3[1,3,4]]]
// const array4 = array3.flat(Infinity);
// console.log(array4);   //=> output [1,2,3,4,5,6,3,5,3,6,7,3,3] //all in one


// console.log(Array.isArray("sanket"))  //=> output :false
// console.log(Array.from("sanket"))  //=> output ['s','a','n','k',..... ]
// console.log(Array.from({name:"sanket"})) //************* =>output []   they are not found then empty squre bracket

//===================combine array================
let arr1 = 100
let arr2 = 200
let arr3 = 300

console.table(Array.of(arr1,arr2,arr3))

//************study */
// isArry
// Form
// of