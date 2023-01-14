let evenOrOddInput =document.getElementById("evenOrOddInput");
let answerReturn = document.getElementById("answerReturn");



let savedInput = "";
let sayHelloUrl = "";



evenOrOddInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){helloApi(evenOrOddInput)}
    console.log(savedInput)
})
function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        answerReturn.textContent = data
        console.log(answerReturn)
    }
  )
}

function helloApi(evenOrOddInput){
    var letters = /^[0-9]+$/;
    if(evenOrOddInput.value.match(letters)){
        savedInput = evenOrOddInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/odd/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        answerReturn.textContent = "enter a valid response";
    }
}