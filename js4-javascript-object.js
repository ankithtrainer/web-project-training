const student ={
    myname :"Alok Halder",
    age : 46,
    city: "Bangalore",

    hometask : val = function(){
        console.log(" Welcome to javascript object knowledge ");
    }
    
}
student.rollno =100; 

delete student.city;

console.log( " Name " + student.myname);

console.log( " Age " + student.age);

//console.log( " Name " + student.city);

//console.log("  Display Function "+ student.display);

console.log(" Roll No  : "+ student.rollno);

console.log( " Home Task " + student.hometask);
