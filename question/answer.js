
let sumbitRadio = document.getElementById('sumbitRadio')
let answerError = document.getElementById('answerError')


sumbitRadio.addEventListener("click",function(event){
    
    let answer = document.getElementsByName('answer')

    let findAnswer =null

    for(let i =0 ; i<answer.length;i++){
        if(answer[i].checked){
            findAnswer=answer[i].value
        }
    }

    if(findAnswer==="hyderabad"){
        answerError.textContent="Wrong Answer"
        answerError.classList.add('span')
        answerError.classList.remove('perfect')
    }
    else if(findAnswer==="chennai"){
        answerError.textContent="Wrong Answer"
        answerError.classList.add('span')
        answerError.classList.remove('perfect')
        
    }
    else if(findAnswer==="delhi"){
        answerError.textContent="Right Answer"
        answerError.classList.add('perfect')
        answerError.classList.remove('span')
    }
    else if(findAnswer==="mumbai"){
        answerError.textContent="Wrong Answer"
        answerError.classList.add('span')
        answerError.classList.remove('perfect')
    }

    
    
    
})