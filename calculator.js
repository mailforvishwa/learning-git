var number1 = prompt('enter number1');
var number2 = prompt('enter number 2');
//var total=Number(number1)+Number(number2);
alert(add(number1,number2));
alert(sub(number1,number2));

function add(number1,number2){
    total=Number(number1)+Number(number2);
    return total;
}

function sub(number1,number2){
    difference = Number(number1) - Number(number2);
    return difference;
}