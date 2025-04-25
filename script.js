const button=document.getElementById('button1');
const input=document.getElementById('input');
const result=document.getElementById('result');
const chances=document.querySelector('.chance span');
// let chance=3;
// let randnum=Math.floor(Math.random()*10)+1;
// console.log(randnum);
let randnum;
let chance=chances.innerText;
// console.log(chance);
const check= (number)=>{
    if(chances.innerText==5){
    button.innerText="Check";
    randnum= Math.floor(Math.random()*50)+1;
    }
    console.log(randnum);
   if(number==randnum){
       console.log("correct");
       result.innerText="You Won!"
       chance=5;
       chances.innerText=5;
       button.innerText="Play Again";
    }
     if(number<randnum){
         chance--;
        chances.innerText=`${chance}`;
        result.innerText="Your number is Less";
        console.log('your number is less');
    }
    else if(number>randnum){
        result.innerText="Your number is Greater"
        console.log('your number is greater');
        chance--;
        chances.innerText=`${chance}`;
    }
    
    if(chances.innerText==0){
    // console.log("You Lose");
    result.innerText="You Lose !";
    button.innerText="Play Again";
    chances.innerText=5;
    chance=5;
    input.value=`${randnum}`;
}
    console.log(chance);
}

button.addEventListener('click', ()=>{
    // console.log("button clicked");
    let number=input.value;
    // console.log(number);
    input.value="";
    if(button.innerText==="Play Again"){
        console.log("not playing");
        button.innerText="Check";
    }
    else if(number)
    check(number);
});

