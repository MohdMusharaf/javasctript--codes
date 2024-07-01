let selectPet = document.getElementById('selectPet')
let petSelect = document.getElementById('petSelect')


selectPet.addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        if(selectPet.value==="cat"){
            petSelect.style.backgroundImage="url('cat.png')"
        }
        else if(selectPet.value==="parrot"){
            petSelect.style.backgroundImage="url('parrot.png')"
        }
        else if(selectPet.value==="dog"){
            petSelect.style.backgroundImage="url('dog.png')"
        }
        else if(selectPet.value==="spider"){
            petSelect.style.backgroundImage="url('spider.png')"
        }
        else {
            petSelect.style.backgroundImage="url('rabbit.png')"
        }
    }
})