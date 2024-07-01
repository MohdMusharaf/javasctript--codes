let requestUrl = document.getElementById('requestUrl')  // url
let urlError = document.getElementById('urlError')      //error url
let requestMethod = document.getElementById('requestMethod')
let resquestBody = document.getElementById('resquestBody')   // teatarea body
let bodyError =document.getElementById('bodyError')         // error body
let requestSend = document.getElementById('requestSend')    // button
let responseStatus = document.getElementById('responseStatus')   // response status
let responseBody = document.getElementById('responseBody')     // response body

requestUrl.addEventListener("blur",function(){
    if(requestUrl.value===""){
        urlError.textContent="Requried*"
    }
    else{
        urlError.textContent=""
    }
})

resquestBody.addEventListener("blur",function(){
    if(resquestBody.value===""){
        bodyError.textContent="Requried*"
    }
    else{
        bodyError.textContent=""
    }
})


function postRequestMethod(){
    const url = JSON.parse(requestUrl.value)
    let data = JSON.parse(resquestBody.value);

    const options ={
        method: requestMethod.value,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization" : "Bearer f3a5e0c6aef2467d6ed23217acc0779e59db556c892813efe62b110bb216a7cd"
        },
        body:JSON.stringify(data)
    }

    fetch(url,options)

    .then(function(response){
        responseStatus.value=response.status
        return response.json()
    })

    .then(function(jsonData){
        responseBody.value=`"id :"${jsonData.id},"Name:"${jsonData.name},"email":${jsonData.email},"Gender":${jsonData.gender},"Status :"${jsonData.status}`
        console.log(jsonData);
    })


// https://gorest.co.in/public/v2/users

//  {
// "name":"jslsl",
// "email":"hsadfaah@gmail.com",
// "gender":"male",
// "status":"active"
// }
    

}


function putRequestMethod(){

    const url = JSON.parse(requestUrl.value)
    let data = JSON.parse(resquestBody.value);

    const options ={
        method: requestMethod.value,
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization" : "Bearer f3a5e0c6aef2467d6ed23217acc0779e59db556c892813efe62b110bb216a7cd"
        },
        body:JSON.stringify(data)
    }

    fetch(url,options)

    .then(function(response){
        responseStatus.value=response.status
        return response.json()
    })

    .then(function(jsonData){
        responseBody.value=`"id :"${jsonData.id},"Name:"${jsonData.name},"email":${jsonData.email},"Gender":${jsonData.gender},"Status :"${jsonData.status}`
        console.log(jsonData);
    })
    
}


function urlrequestMethod(){
    
    
    if( requestMethod.value==="POST"){
        
        postRequestMethod()

        console.log("Post");
    }
    else if( requestMethod.value==="PUT"){

        putRequestMethod();

        console.log("Put");
    }

   
}

requestSend.addEventListener("click", function(){
    if(requestUrl.value===""){
        urlError.textContent="Requried*"
    }
    else{
        urlError.textContent=""
    }

    if(resquestBody.value===""){
        bodyError.textContent="Requried*"
    }
    else{
        bodyError.textContent=""
    }

    urlrequestMethod()
})

