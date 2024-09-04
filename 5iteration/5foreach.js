const coading = ['js','c','c++','java']
//1

// coading.forEach(function( val){
//     console.log(val);
//     })
//2

// coading.forEach((item)=>{
//     console.log(item);
    
// })

//3

// function printMe(item){
//     console.log(item);
//     } coading.forEach(printMe)

// coading.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
//     })

const mycoading =[
    {
        lngName:'js',
        lngFile:'js'
    },
    {
        lngName:'java',
        lngFile:'j'
    },
     {
        lngName:'c',
        lngFile:'c programing'
    },
]
mycoading.forEach((item)=>{
    console.log(item.lngName);
    })