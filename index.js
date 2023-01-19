//function add(x,y)
//{
//return x+y
//}
//function subtract(x,y)
//{
//return x-y
//}
//function multiply(x,y)
//{
//return x*y
//}
//function divide(x,y)
//{
//return x/y
//}
//function operate(x,y,operator){
//    let answer= operator(x,y)
//}
//

let currentValue=''
let numbers=document.querySelectorAll(".number");
let clear=document.querySelector(".clear");
let operations=document.querySelectorAll(".operation")
let remove=document.querySelector(".delete");
let decimal=document.querySelectorAll(".decimal");
let firstNumber=document.querySelector(".firstNumber");
let secondNumber=document.querySelector(".secondNumber");
numbers.forEach((num)=>{
    num.addEventListener("click",function(){
        handleNumber(this.innerText)
        firstNumber.innerText=currentValue
    })
})
numbers.forEach((keybtn)=>{
    keybtn.focus()
    keybtn.addEventListener("keypress",function(e){
        handleNumber(e.key)
        firstNumber.innerText=currentValue
    })  
})
operations.forEach((operation)=>{
operation.addEventListener("click",function(){
    handleOperation(this.innerText)
    firstNumber.innerText=currentValue


})
})
operations.forEach((operation)=>{
    operation.addEventListener("keypress",function(e){
        firstNumber.innerText=parseInt(firstNumber)
        handleOperation(e.key)
        console.log(e)
        firstNumber.innerText=currentValue

    })
    })
function  handleNumber(val){
    let screen=document.querySelector(".display");
    if(currentValue.length<10){
        currentValue+=val
    }
}
function handleOperation(op){
    currentValue+=op
}

