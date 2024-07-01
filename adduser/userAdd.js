let nameId = document.getElementById('nameId')
let emailId = document.getElementById('emailId')
let nameError = document.getElementById('nameError')
let emailError = document.getElementById('emailError')
let submit = document.getElementById('submit')

nameId.addEventListener("blur" , function(){
    if(nameId.value===""){
        nameError.textContent="Requied*"
    }
    else{
        nameError.textContent=""
    }
})

emailId.addEventListener("blur" , function(){
    if(emailId.value===""){
        emailError.textContent="Requied*"
    }
    else{
        emailError.textContent=""
    }
})

submit.addEventListener("click",function(){

    if(nameId.value===""){
        nameError.textContent="Requied*"
    }
    else{
        nameError.textContent=""
    }

    if(emailId.value===""){
        emailError.textContent="Requied*"
    }
    else{
        emailError.textContent=""
    }
    nameId.value=""
    emailId.value=""
})