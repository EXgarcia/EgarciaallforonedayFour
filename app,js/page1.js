let nameInput =document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
let helloSubBtn = document.getElementById("helloSubBtn")


let savedInput = "";
let sayHelloUrl = "";



nameInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){helloApi(nameInput)}
    console.log(savedInput)
})
function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        helloReturn.textContent = data
        console.log(helloReturn)
    }
  )
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/hello/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        helloReturn.textContent = "enter a valid response";
    }
}