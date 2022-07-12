let firstCode = document.querySelector("h1");
firstCode.textContent = "Hello Coders! ";

let shortDes = document.querySelector("p");

shortDes.textContent = "Hello Guyes! Do you want to learn more code. Try Our System! ";

let anotherDes = document.querySelector("p");
anotherDes.textContent = "None Other Than Siam";

let iceCream = "chocolate";

if(iceCream === "chocolate"){
    alert("Yeah, I love Chocolate Icecream! ");
}else{
    alert("I don't like Vanilla Ice cream at all! ");
}

document.querySelector("h1").addEventListener('click', function(){
    alert("This is the heading");
})

let getTheNumber = document.getElementById("getTheNumber").value ;
let primeNumber = getTheNumber / 2;

if(primeNumber === 0){
    console.log( primeNumber + "is a prime number");
}else{
    console.log("{primeNumber} is not a prime number");
}