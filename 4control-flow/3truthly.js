const userEmail = []

if (userEmail) {
    //console.log('yes');
    
} else {
    //console.log('no');
    
}

//falsy values

// false
// 0
// -0
// 0n BigInt
// null
// undefined
// NaN

//truthy value

// '0'
// 'false'
// ' '
// []
// {}
// function(){}

//example

const obj1 = {}
if(Object.keys(obj1).length === 0){
    //console.log('yes its work');
    }

    //******Nullish Coalescing Operator(??):****** */   (null or undefine)
    let val1;
    //val1 = 5  ?? 10   //=> output 5
     //val1 = null ?? 10
    // val1 = undefined ?? 10
     val1 = null ?? 10??60

    //console.log(val1);


//Ternart operator**********************

//condition ? true :false 
const tt = 100
tt >= 800 ? console.log('yes'):console.log('no');

 
    