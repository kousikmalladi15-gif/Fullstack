let incrementer=document.getElementById('increment-button');
let resetter= document.getElementById('reset-button');
let decrementer = document.getElementById('decrement-button');
let counter=document.getElementById('count-label');

let count=0;

incrementer.onclick = function(){
    count++;
    counter.textContent=count
}
decrementer.onclick=function(){
    count--;
    counter.textContent=count
}
resetter.onclick= function(){
    count=0;
    counter.textContent=count
}