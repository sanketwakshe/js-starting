//.this = current contenst
const user ={
    username:"sanket",
    age:34,
    welcomeMessage:function(){
        console.log(`hi ${this.username},welcome to my team`);
        console.log(this); // all object will be display
        
    }
}
// user.welcomeMessage()  //ye uparka current contest de raha hai for using .this method
// user.username = "sam"
// user.welcomeMessage()  //context will be change then resul will be sam.....
//console.log(this);

//function ke andar this kam nahi karta
// function chai(){
//     let username1="sanket"
//     //console.log(this);
//     console.log(this.username1);

    
// }chai()

//********************arrow function */
const chai = ()=>{
    let username1 = "sanket"
    //console.log(this);
    
}
chai()

//=================

// const addTwo = (num1,num2)=>{  //{ me likha to return karna padta hai}
// return num1+num2
// }

//const addTwo = (num1,num2)=> num1+num2

//const addTwo = (num1,num2)=> (num1+num2)  //=> no curli bracess no return

const addTwo = ()=>({username:"sanket"})  //return  object use wrap ({})
console.log(addTwo);

    
console.log(addTwo(3,4));






