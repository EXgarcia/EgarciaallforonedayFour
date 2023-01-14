let firstNameInput =document.getElementById("firstNameInput");
let lastNameInput =document.getElementById("lastNameInput");
let slackNameInput =document.getElementById("slackNameInput");
let emailInput =document.getElementById("emailInput");
let firstNameReturn = document.getElementById("firstNameReturn");
let lastNameReturn = document.getElementById("lastNameReturn");
let slackNameReturn = document.getElementById("slackNameReturn");
let emailReturn = document.getElementById("emailReturn");



let savedInput = "";
let studentUrl = "";


// FIRSTNAMEINPUT!!!
firstNameInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){helloApi(firstNameInput)}
  
});


lastNameInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){lastNameApi(lastNameInput)}
   
});

slackNameInput.addEventListener("keydown",function(event){
    if(event.key === "Enter"){slackNameApi(slackNameInput)}
});

emailInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){emailApi(emailInput)}
});










function urlCall(url){
  fetch(url).then(
    response => response.json()
  ).then(
    data =>
    {
        firstNameReturn.textContent = data.firstName;
        lastNameReturn.textContent = data.lastName; 
        slackNameReturn.textContent = data.slackName; 
        emailReturn.textContent = data.email;
        hobbiesReturn.textContent = data.hobbies; 
        console.log(firstNameReturn)
    }
  )
}

function firstNameApi(firstNameInput){
    var letters = /^[A-Za-z]+$/;
    if(firstNameInput.value.match(letters)){
        savedInput = firstNameInput.value;
        studentUrl = "https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByFirstName/" + savedInput;
        urlCall(studentUrl)
    }else{
        firstNameReturn.textContent = "enter a valid response";
    }
}

function lastNameApi(lastNameInput){
    var letters = /^[A-Za-z]+$/;
    if(lastNameInput.value.match(letters)){
        savedInput = lastNameInput.value;
        studentUrl = "https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByLastName/" + savedInput;
        urlCall(studentUrl)
    }else{
        lastNameReturn.textContent = "enter a valid response";
    }
}


function slackNameApi(slackNameInput){
   
    if(slackNameInput){
        savedInput = slackNameInput.value;
        studentUrl = "https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentBySlackName/" + savedInput;
        urlCall(studentUrl)
    }else{
        slackNameReturn.textContent = "enter a valid response";
    }
}

function emailApi(emailInput){
    savedInput = emailInput.value;
    studentUrl ="https://allforonewebapielizarxavier.azurewebsites.net/StudentDirectoryFolder/GetStudentByEmail/" + savedInput;
    urlCall(studentUrl)
}