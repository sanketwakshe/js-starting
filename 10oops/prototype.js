// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  // write length bhetnar


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    // getSpiderPower: function(){
    //     console.log(`Spidy power is ${this.spiderman}`);
    // }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance =>Inheritance=>Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass).

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport   // 2 object la connect karnyach kam
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)  // ha modern kam karto object to object connect karayla  (konashi , konal)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // output chaiorcode because current function they are run => current context
    console.log(`True length is: ${this.trim().length}`);
}

// anotherUsername.trueLength() =>11
// "hitesh".trueLength() =>6
// "iceTea".trueLength() =>6