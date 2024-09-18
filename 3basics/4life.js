//global scope ke pollution se problem hoti hai usase bache 

// Immediately invoked function expressions (iife)

// (()=>{
//     console.log("DB connected");
    
// })()   // they are the syntax (()={})();

( (name)=>{
    console.log(`DB connected ${name}`);
    
})("sanket") 