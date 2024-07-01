let newId = document.getElementById('newId')
let confirmId = document.getElementById('confirmId')
let newError = document.getElementById('newError')
let confirmError = document.getElementById('confirmError')
let update = document.getElementById('update')

newId.addEventListener("blur",function(){
    if(newId.value===""){
        newError.textContent= "Required*"
    }
    else{
        newError.textContent=""
    }
})

confirmId.addEventListener("blur",function(){
    if(confirmId.value===""){
        confirmError.textContent= "Required*"
    }
    else{
        confirmError.textContent=""
    }
})

update.addEventListener("click",function(){
    
        if(newId.value===""){
            newError.textContent= "Required*"
        }
        else{
            newError.textContent=""
        }
    
    
    
      

        let newE1 = newId.value
        let confirmE1 = confirmId.value;
        if(newE1!== confirmE1){
            confirmError.textContent="Passwords must be same"
        }
        else{
            confirmError.textContent=""
        }
})