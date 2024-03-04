let buttonIncrease = document.getElementById("increase");
let buttonReset = document.getElementById("reset");
let counterShow = document.getElementById("value");

let count = 0;

buttonIncrease.addEventListener("click",()=>{
            count +=1;
            counterShow.innerHTML = count;
})

buttonReset.addEventListener("click" ,()=>{
    if(confirm("Resetlemek ister misiniz?")==true){
        count = 0;
        counterShow.innerHTML = count;}
    else{
        return false;
    }
})