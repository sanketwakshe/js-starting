const score = 200
if (200>100) {
    let power = 'fly'
    //console.log(`power is :${power}`);
    
}
// console.log(`power is ${power}`); //scope ke bahar run nahi hota

// nested loop

// const balance = 1000
// if (balance < 500) {
//     console.log('less');
//     }else if (balance<900){
//         console.log('less');
//          }
//          else{
//             console.log('not equal');
//             }

const userLoggedin = true
const debitCard = true
const loggedInFormGoogle= true
const loggedInFormEmail = false  // ekbhi true then they are run (||or statement) 
// ***********************and && || or operations are a logical operations
if (userLoggedin && debitCard) {  //he will be chacke both(right , left) condition
    console.log('allow');
}
if (loggedInFormGoogle || loggedInFormEmail) {  // or statement
    console.log("yes its logeddein");
    
}