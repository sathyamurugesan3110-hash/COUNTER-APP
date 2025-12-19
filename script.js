const decrement = document.getElementById("btn-dec");
const reset = document.getElementById("btn-reset");
const increment = document.getElementById("btn-inc");
const counter=document.querySelector("p");
console.log(decrement,increment,reset,counter);

let count=0;

increment.addEventListener("click",()=>{
    count++;
    counter.innerText=count;
});

decrement.addEventListener("click",()=>{
    count--;
    counter.innerText=count;
});

reset.addEventListener("click",()=>{
    count=0;
    counter.innerText=count;
});





