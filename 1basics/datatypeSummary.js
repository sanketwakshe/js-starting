// 1) primitive//only copy acces

//7 types : String.Number ,Boolean,null,undefine,symbol,BigInt;

// const score = 100
// const scoreValue = 100.3
//  const login = false
//  const temp = null
//  let userEmail;
//   const id = Symbol('123')
//   const id1 = Symbol('123') //typeObj = symbol
//   console.log(id1===id)
//   const BigNumber = 3432455849388949n
// **************************************************************************

// 2) referance type(Non Primitive)

//Array,Objects,Functions

//[] square bracket

//  const hero = ["sanket","nikhil","sanika"];  //Array

//  let ObjId ={
//     name:"sanket",
//     age:22,
//  }

//  const MyFunction = function(){ // typeOf = function
//    //  console.log("sanket");
//  }
// ******************************************************************

// ***********************Table of typeOf operator result**********************
//  undefined="undefined"
//  null="object"
//  Boolean="boolean"
//  Number="number"
//  String="string"


 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Memorys type

// 1) Stack (Premitive types) give only copy
// let a = "ss"
// let b = a
//   b="bb"
//   console.log(a)
//   console.log(b);
//                   aa // copy
//                   ss //copy
//                   aa
//                   ss 
 

// *************************************************************************
/// 2) Heap (Non Premitive type) give a value are a same

// one heap box many time request get a same value not change