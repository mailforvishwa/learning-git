// Make a keyless car
//This car will only let you drive if you are over and equal 18.

let age = prompt('what is your age?');

let agefactor = function(age){

}
agefactor(age);

function ageforDrive(age){
    if(Number(age) > 18){
        alert('Enjoy the ride');
    }
    else if(Number(age) < 18){
        alert('Sorry you are too young to drive');
    }
    else{
        alert('Enjoy the First ride');
    }
}
ageforDrive(age);

//logical opertors
// &&
// ||
// !

if (Number(age)> 18 && name === 'Vishwa'){
    console.log('Vishwa is over 18');
}
