let count = document.getElementById('counter');
let countValue = 0;
let increment = document.getElementById('inc');
let decrement = document.getElementById('dec');
let reset = document.getElementById('reset');

increment.addEventListener('click',()=>{
    countValue++;
    count.innerHTML = countValue;
})

decrement.addEventListener('click' , ()=>{
if(countValue > 0){
    countValue--;
    count.innerHTML = countValue
}
})

reset.addEventListener('click' , ()=>{
    countValue = 0;
    count.innerHTML = countValue;
})