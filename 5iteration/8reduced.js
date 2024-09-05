const myNum = [1,2,3]

//  const mytotal = myNum.reduce(function(acc,currval){
//     console.log(`acc ${acc} curv${currval}`);
//     return acc + currval
//  } ,0 )
 console.log(mytotal);

const mytotal = myNum.reduce(( acc , curr)=> acc + curr ,0 );

 //output 
//  acc 0 curv1
// acc 1 curv2
// acc 3 curv3


//syntax of reduced from mdn

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10