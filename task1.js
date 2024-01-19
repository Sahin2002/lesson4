// task:1
const studentProfile={
    name:'Sahin',
    age:21,
    course:'front-end',
    hobbies:['futboll','games','spor']
}
// delete course
delete studentProfile.course
console.log(studentProfile);
// object destructuring
const {name:studentName,age ,...rest}=studentProfile
console.log(studentName)
console.log(age);
console.log(rest);
// array
const grades=[7,55,77,44,33,22,10]
console.log(grades[0])
console.log(grades[1]);
// Object copying
const additionalInfo={
    address:'baku',
    phoneNumber:29492482
}
const completeProfile={...studentProfile,...additionalInfo}
console.log(completeProfile)
