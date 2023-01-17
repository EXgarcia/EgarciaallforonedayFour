let firstNumberInput = document.getElementById("firstNumberInput");
let secondNumberInput = document.getElementById("secondNumberInput");
let numberReturn = document.getElementById("numberReturn");



let savedInput = "";
let savedInputTwo ="";
let sayHelloUrl = "";



firstNumberInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstNumberInput, secondNumberInput)}
})

secondNumberInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstNumberInput, secondNumberInput)}
})




function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        numberReturn.textContent = data
        console.log(numberReturn)
    }
  )
}

function helloApi(firstNumberInput, secondNumberInput){
    var letters = /^[0-9]+$/;
    if(firstNumberInput.value.match(letters)&& secondNumberInput.value.match(letters)){
        savedInput = firstNumberInput.value;
        savedInputTwo = secondNumberInput.value;"https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/adding/"
        sayHelloUrl =  + savedInput + "/" + savedInputTwo;
        urlCall(sayHelloUrl)
    }else{
        numberReturn.textContent = "enter a valid response";
    }
}