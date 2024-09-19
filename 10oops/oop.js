//object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
         console.log(`Username: ${this.username}`);
        console.log(this); // purn object denar karan toch current context ahe
    }

}
//console.log(user.username);
//console.log(user.getUserDetails());

// constructor  = new
const date = new Date() //ek hi object se sara kam ho 

//example of new

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // likhana ya nahi
}

const userOne = new User("hitesh", 12, true)
const userTwo =  new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);

//new => new objecr create
 //call constructor call
 // this arrgument inject hota hai
 // func mil jata hai

