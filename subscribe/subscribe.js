let nameId = document.getElementById('nameId')
let emailID = document.getElementById('emailId')
let nameError = document.getElementById('nameError')
let emailError =document.getElementById('emailError')
let subscribe = document.getElementById('subscribe')

nameId.addEventListener("blur",function(){
    if(nameId.value===""){
        nameError.textContent="Requried*"
    }
    else{
        nameError.textContent=""
    }
})

emailID.addEventListener("blur",function(){
    if(emailID.value===""){
        emailError.textContent="Requried*"
    }
    else{
        emailError.textContent=""
    }
})

subscribe.addEventListener("click",function(event){
    
        if(nameId.value===""){
            nameError.textContent="Requried*"
        }
        else{
            nameError.textContent=""
        }
    
    
   
        if(emailID.value===""){
            emailError.textContent="Requried*"
        }
        else{
            emailError.textContent=""
        }
    
})