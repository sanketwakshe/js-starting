//object de-structure

const course ={
    coursename:"computer network",
    price:"999",
    courseInstructor:"sanket"
}
//console.log(course.price)

const {courseInstructor:instr} = course;   //=> name will be changed directly and call it

//console.log(courseInstructor);

console.log(instr);

//api==================   ==> apna kam dusro ko dena

//=================json  ==>value and key both are string

// {
//     'name':"sanket",
//     'coursename':"scirnce"
// }
// [
//     {}
//     {}
//     {}
// ]//random user api link
//=> structure cod by using json formmat
