//Dates

// let myDate = new Date()
// console.log(myDate);

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString()); //09/03/2024++++++++
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);  =>object*****************

 let myCreateDatec = new Date(2024 ,0 ,9, ) // date and time given
//let myCreateDatec = new Date(2024 ,0 ,23,5,3 )
// let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDatec.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMounth()+1);
newDate.toLocaleString('default',{
    dayPeriod:"long"
});


