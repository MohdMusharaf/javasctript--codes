let nameInfo = document.getElementById('nameInfo')   
let gamilInfo = document.getElementById('gamilInfo')
let changeStatus = document.getElementById('changeStatus')
let male = document.getElementById('male')
let female = document.getElementById('female')
let sumbit = document.getElementById('submit')
let eamilError = document.getElementById('eamilError')
let nameError = document.getElementById('nameError')


nameInfo.addEventListener("blur",function(){
    if(nameInfo.value===''){
        nameError.textContent="Requried*"
    }
    else{
        nameError.textContent=""
    }
    
})

gamilInfo.addEventListener("blur",function(){
    if(gamilInfo.value===""){
        eamilError.textContent="Requried*"
    }
    else{
        eamilError.textContent=""
    }
})





sumbit.addEventListener("click",function(event){
    event.preventDefault();
    if(nameInfo.value==="" || gamilInfo.value ===""){
        alert('Enter Your Info Completly')
    }

    let genderElement =""
    let genderValue = document.getElementsByName('name');
    for (let i = 0; i < genderValue.length; i++) {
        if (genderValue[i].checked) {
            genderElement = genderValue[i].value;
            break;
        }
    }

    let data ={
        name:nameInfo.value,
        email:gamilInfo.value,
        gender: genderElement,
        status: changeStatus.value
    }
    console.log(data.status);

    const url ="https://gorest.co.in/public/v2/users"

    let options ={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization : "Bearer f3a5e0c6aef2467d6ed23217acc0779e59db556c892813efe62b110bb216a7cd"
        },
        body: JSON.stringify(data)
    }
    fetch(url,options)

    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        console.log(jsonData);
    })
})