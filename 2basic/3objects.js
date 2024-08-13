//singleton 
//object.create

//---------------object literals------------------

const mySym =  Symbol("key1")

const jsUser ={
    name:"sanket",                //key:"value"
    age:25,
    [mySym ] : "mykey1",
    email:"sanket@gmail.com",
    isLoggedIn:false,
    "fullName":"sanket"

}
/******///console.log(jsUser.email)
//======//console.log(jsUser["email"]);
//console.log(jsUser["fullName"]);  // they are right way to decler object
//console.log(jsUser[mySym]);

//change the email 
jsUser.email = "sanika@gmail.com"
//console.log(jsUser["email"]);

//lock the object

//Object.freeze(jsUser) // lock object no any changes
jsUser.email = "aditi@gmail.com"
//console.log(jsUser);


//output of jsUser see symbols
// {
//     name: 'sanket',
//     age: 25,
//     email: 'sanika@gmail.com',
//     isLoggedIn: false,
//     fullName: 'sanket',
//     [Symbol(key1)]: 'mykey1'
//   }




//*******************function add in object

jsUser.greeting = function(){
    console.log("hellow sanket");
    }
    console.log(jsUser.greeting()); //print in the jsUser


 jsUser.greetingTwo = function(){
    console.log(`hellow sanket ${this.age}`);  // this are use to find out key of in the perticulor object
    }
    console.log(jsUser.greetingTwo());
    