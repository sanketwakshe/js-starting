//promise => in feuture me hone vali chij
// create promises
//conssume
//create

//.then => value lena
//.catch => error dena
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})// direct connection of .then and resolve function

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:'sanket',email:'sank@gmail.com'})
    })
},1000);
promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))//promise pura huva yas nahi

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){  // in output fetch ka kam jaldi hota hai
    try {
        const response = await fetch('https://api.github.com/users/sanketwakshe')

        const data = await response.json()  // await ha backend madhun yenar data lavkar ananya sathi madat karto
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
//getAllUsers()

fetch('https://api.github.com/users/sanketwakshe')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// fetch() madhe asnare kam pahile exicute hota


// devide in two part 
// 1 variable or data memory me save 
// 2 web or browser or node ke api request handle karne  => network request milta hai


// work => div two part first networks ko req janar ani mg ti data madhe save honar 
// data madhe 2 part onfulfield and on rejection ashya 2 function triger hotat

// and then this data fullfiels the response