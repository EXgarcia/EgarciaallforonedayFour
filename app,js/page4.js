let firstGreatInput = document.getElementById("firstGreatInput");
let secondGreatInput = document.getElementById("secondGreatInput");
let greatReturn = document.getElementById("greatReturn");



let savedInput = "";
let savedInputTwo ="";
let sayHelloUrl = "";



firstGreatInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstGreatInput, secondGreatInput)}
})

secondGreatInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstGreatInput, secondGreatInput)}
})




function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        greatReturn.textContent = data
        console.log(greatReturn)
    }
  )
}

function helloApi(firstGreatInput, secondGreatInput){
    var letters = /^[0-9]+$/;
    if(firstGreatInput.value.match(letters)&& secondGreatInput.value.match(letters)){
        savedInput = firstGreatInput.value;
        savedInputTwo = secondGreatInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/greater/" + savedInput + "/" + savedInputTwo;
        urlCall(sayHelloUrl)
    }else{
        greatReturn.textContent = "enter a valid response";
    }
}