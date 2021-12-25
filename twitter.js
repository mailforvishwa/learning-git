var datbase = [
    {
        username: 'Vishwa',
        password: 'test123'
    },
    {
        username: 'Ashwin',
        password: 'test345'
    }
];
var newsFeed = [
    {
        username: 'Vishwa',
        tweet: 'Enjoy learning'
    },
    {
        username: 'Ashwin',
        tweet:'JS is Cool'
    }
];
var username = prompt('Enter username');
var password = prompt('Enter password');

function isValidUser(username,password){
    for(i=0; i<datbase.length; i++){
        if(username === datbase[i].username && password === datbase[i].password){
            return true;
        }
        
    }
    return false;

}

function sigIn(username, password){
    if(isValidUser(username, password)){
        console.log(newsFeed);
    }
    else{
        alert('wrong details');
    }
    /*
    for(i=0; i<datbase.length; i++){
        if(username === datbase[i].username && password === datbase[i].password){
            console.log(newsFeed);
        }
        else{
            console.log('Wrong details');
        }
    }*/


}

sigIn(username,password);