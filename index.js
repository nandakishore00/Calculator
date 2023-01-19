let currentValue=''
let x=''
let y=''
let output=0
let operator=''
let numbers=document.querySelectorAll(".number");
let clear=document.querySelector(".clear");
let equals=document.querySelector(".equals")
let operations=document.querySelectorAll(".operation")
let remove=document.querySelector(".delete");
let decimal=document.querySelectorAll(".decimal");
let firstNumber=document.querySelector(".firstNumber");
let secondNumber=document.querySelector(".secondNumber");
numbers.forEach((num)=>{
    num.addEventListener("click",function(){
        handleNumber(this.innerText)
    })
})
numbers.forEach((keybtn)=>{
    keybtn.focus()
    keybtn.addEventListener("keypress",function(e){
        handleNumber(e.key)
    })  
})
clear.addEventListener("click",function(){
    currentValue=''
    operator=''
    firstNumber.innerText=''
    secondNumber.innerText=''
})
operations.forEach((operation)=>{
operation.addEventListener("click",function(){
    handleOperation(this.innerText)
})
})
operations.forEach((operation)=>{
    operation.addEventListener("keypress",function(e){
        handleOperation(e.key)
    })
    })
equals.addEventListener("click",function(){
    handleEqual()
    
})
remove.addEventListener("click",function(){
    handleRemove()
})
document.addEventListener("keyup",function(e){
    console.log(e)
    if(e.key==='Enter'){
        handleEqual()
    }
    if(e.key==='Backspace'){
        handleRemove()

    }
})
function  handleNumber(val){
    if(secondNumber.innerText==''){
        currentValue=''
    }
    if(currentValue.length<20){
        currentValue+=val
        secondNumber.innerText=currentValue
    }
}
function handleOperation(op){
    operator=op
    x=currentValue
    firstNumber.innerText=currentValue+' '+op
    secondNumber.innerText=''
}
function handleEqual(){
    y=secondNumber.innerText
    x=parseInt(x)
    y=parseInt(y)
    if(operator=='+'){
        output=x+y
    }
    else if(operator=='-'){
        output=x-y
    }
    else if(operator=='/'){
        output=x/y
    }
    else if(operator=='x'){
        output=x*y
    }
    secondNumber.innerText=output.toString()
    currentValue=output.toString()
    console.log(currentValue)
    firstNumber.innerText=''
    operator=''
}
function handleRemove(){
    secondNumber.innerText=secondNumber.innerText.substring(0,currentValue.length-1)
    currentValue=secondNumber.innerText
}
function roundNumber(o){
    return Math.round(o*1000)/1000
}
