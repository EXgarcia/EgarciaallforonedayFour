let reverseInput =document.getElementById("reverseInput");
let reverseReturn = document.getElementById("reverseReturn");



let savedInput = "";
let sayHelloUrl = "";



reverseInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){helloApi(reverseInput)}
    console.log(savedInput)
})


function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        reverseReturn.textContent = data
        console.log(reverseReturn)
    }
  )
}

function helloApi(reverseInput){
    
    if(reverseInput){
        savedInput = reverseInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Reverse/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        reverseReturn.textContent = "enter a valid response";
    }
}