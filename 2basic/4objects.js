
//const tinderUser1 = {}   //=> output {},non singleton object

//singletone 
// const tinderUser = new Object()     //=>singletone object

// tinderUser.id = "123asd"
// tinderUser.name="sanket"
// tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regulorUser = {
    email:"sanket@123gmail.com",
    fullName:{
        userfullname:{
            firstName:"sanket",
            lastName:"wakshe"
        }

    }
}
//console.log(regulorUser.fullName);
//console.log(regulorUser.fullName.userfullname.lastName);


const obj1 = {1:"a",2:"b" }
const obj2 = {3:"c",4:"d" }
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)     //two object combine by using assign

const obj3 ={...obj1,...obj2}
console.log(obj3);           //=> npm object
