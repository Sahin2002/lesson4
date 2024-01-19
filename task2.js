// task:2
const employeeDetails={
    fullname:'Sahin',
    position:'Baku',
    years0fExperience:2143,
    skills:['futboll','spor','clicking'],
    contact:{
        email:'sahin.derisov@gmail.com',
        phone:'0559875049'
    }
}
// delete email
delete employeeDetails.contact.email
console.log(employeeDetails.contact);
// employeeDetails depertment add
employeeDetails['depertment']='police'
// destructuring
const {fullname:employeeName,position,contact,...rest}=employeeDetails
console.log(employeeName);
console.log(position);
console.log(contact);
console.log(rest);
//array
const  projectScores=[{projectId:44},{score:77}]
// merginig
const personalInfo={
    homeAddress:'28may',
    emergencyContact:'saaidifi@gmail.com',
    maritalStatus:'developer'
}
const completeEmployeeProfile={...employeeDetails,...personalInfo}
console.log(completeEmployeeProfile);
