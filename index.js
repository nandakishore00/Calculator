function add(x,y)
{
return x+y
}
function subtract(x,y)
{
return x-y
}
function multiply(x,y)
{
return x*y
}
function divide(x,y)
{
return x/y
}
function operate(x,y,symbol){
    return symbol(x,y)
}


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
    firstNumber.innerText=currentValue+' '+this.innerText
    console.log(currentValue,'op')
    handleOperation(this.innerText)


})
})
operations.forEach((operation)=>{
    operation.addEventListener("keypress",function(e){
        
        firstNumber.innerText=currentValue+' '+e.key
        
        handleOperation(e.key)

    })
    })
equals.addEventListener("click",function(){
    handleEqual(this)
    
})
equals.addEventListener("keypress",function(e){
    handleEqual(e.key)
    
    
})
function  handleNumber(val){
    if(currentValue.length<20){
        currentValue+=val
        secondNumber.innerText=currentValue
    }
}
function handleOperation(op){
    operator=op
    x=currentValue
    currentValue=''
    secondNumber.innerText=''
}
function handleEqual(eq){
    y=secondNumber.innerText
    
    x=parseInt(x)
    y=parseInt(y)

    if(operator=='+'){
        operator=add
    }
    else if(operator=='-'){
        operator=subtract
    }
    else if(operator=='/'){
        operator=divide
    }
    else if(operator=='x'){
        operator=multiply
    }
    output = operate(x,y,operator)
    secondNumber.innerText=output
    currentValue=output.toString()
    console.log(currentValue)
    firstNumber.innerText=''
    operator=''
}
