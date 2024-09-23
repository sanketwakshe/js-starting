function setUsername(username){
    this.username = username        // hyacha arth ki konipan tyala axes karu shakto
    
    
    console.log('called');
    
}
function createUser(username,email,password){
    setUsername.call(username)  // this la call laun yenarya pratek value .this ne ghenar vegvegla
    //.call methodla call kela
    this.email = email
    this.password = password
}
const san = new createUser('chai','chai@gmail.com',.123)
console.log(san);

//call => call current execution context kisi dusareko pass karta hai
