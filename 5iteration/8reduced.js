const myNum = [1,2,3]

//  const mytotal = muNum.reduce(function(acc,currval){
//     console.log(`acc ${acc} curv${currval}`);
//     return acc + currval
//  } ,0 )
 console.log(mytotal);

const mytotal = myNum.reduce(( acc , curr)=> acc + curr ,0 )

 //output 
//  acc 0 curv1
// acc 1 curv2
// acc 3 curv3