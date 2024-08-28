//scope  {a} outside then they are simple scope

//global scope {} inside then they are global scope


let a =300 //global scope

if(true){
    let a = 20
    const b = 30
    console.log("inner:",a);  //block scope
    }
    //console.log(a);

    //nested scope

    
    