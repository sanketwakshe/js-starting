function symyName(){
  //  console.log('s');
//console.log('a');
}
//symyName()                                 //=>saymyname = referance then add () exicute

// function addTwoNum(number1,number2){           //=>number1 define say parameters
//     console.log(number1+number2);
    
// }
// addTwoNum(3,null)                                     //=>argument =mins no one send the value


function addTwoNum(number1,number2){           //=>number1 define say parameters
    // let result =number1+number2;
    // return result
    return number1+number2
}
const result = addTwoNum(4,2)
//console.log("result:",result);

//==========================================================


function loginUser(userName){
    return ` ${userName} is logged in`;
}
//console.log(loginUser("sanket"));

//=========================================================================================================================================

function loginUserMessage(username = "sam"){     //=>default value
    if(!username){
        //console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

 //console.log(loginUserMessage())
// console.log(loginUserMessage("hitesh"))


//*****************************************...rest */
function calculateCartPrice(...num1){
    return(num1)
}
//console.log(calculateCartPrice(200,300,400));    //=>multiple values added

//================== how to pass object to function ===========
const user = {
    username:"sanket",
    price:199
}

function handleObject(anyObject){
    //console.log(`my name is ${anyObject.userName} and price is ${anyObject.price}`)
}
//handleObject(user);
handleObject({
    userName:"sanket",
    price:299
})

//================== how to pass Array to function ===========

const mynewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[2]
}
//console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200,300,400]))
