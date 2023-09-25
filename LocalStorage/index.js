let username = document.getElementById("userName");
let age = document.getElementById("age");
let button = document.getElementById("btn");
let display = document.getElementById("disp");
let Rbutton = document.getElementById("Rbtn");

button.addEventListener('click',function(e){
    e.preventDefault()

        innerHTML = username.value;
        localStorage.setItem('UserName',username.value);

        innerHTML = age.value;
        localStorage.setItem('Age',age.value);
    
}) 


Rbutton.addEventListener('click',function(e){
    e.preventDefault()
    
    let username = localStorage.getItem('UserName');
    let age = localStorage.getItem('Age');
    display.innerHTML = "Name" +"-"+ username + " , " + "Age" +"-"+ age;

    // let age = localStorage.getItem('Age');
    // display.innerHTML = age;


})