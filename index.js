console.log('Hello Vishwa');
let name ='vishwa';
console.log(name);
//primitive/ value types;
// string

// number
let age = 30;

//boolean
let selectedValue = true;
// undefined
let orders = undefined
// null
let numberoforder = null;
//Reference type
//object
let person = {
     name: 'Vishwa', 
     age: 30,
     function :calculateAge(){

     } 
    };
console.log(person.age);
console.log(person['age']);

//array
let selectedColors =['red','blue', 'green'];

//for
//while
//dowhile

for(i=0; i<selectedColors.length;i++)
{
    console.log(selectedColors[i]);

}
var i =0;
while(i <selectedColors.length){
    console.log(selectedColors[i]);
    i++;
}

do{
    //

}while(i< selectedColors.length);
console.log(selectedColors[1]);
selectedColors.length; // 3
//function
// function definition
function display(firstName, lastName){
    console.log('first name '+firstName+' last name '+lastName);
    //console.log(name);
}
//function call
display('vishwa','Garudi');
display('Vishwa'); // 
