function order(){
    let name = prompt(`Hey, what is your name?`);
    let email = prompt(`What is your email address`);
    let cakes = prompt(`How many Red Velvet cake do you want to order?`);
    if(name.length){
        alert(`We are so glad to have you here  ${name}, your order is being processed, we'll be in touch by email have a nice time 🥰❤️`);
    }
    else{
        alert(`No Red velvet cake for you!😞😟`)
    }

}
let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", order);