class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return`${this.password}sanket`
         }
         changeUsername(){
            return(`${this.username.toUpperCase()}`)
         }
}
const sank = new User('sank','sank@gmail.com','1234')
console.log(sank.encryptPassword());
console.log(sank.changeUsername());

//behind the sence (without class)


function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());