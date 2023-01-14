let foodInput =document.getElementById("foodInput");
let foodReturn = document.getElementById("foodReturn");



let savedInput = "";
let sayHelloUrl = "";



foodInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){helloApi(foodInput)}
    console.log(savedInput)
})
function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        foodReturn.textContent = data
        console.log(foodReturn)
    }
  )
}

function helloApi(foodInput){
    var letters = /^[A-Za-z]+$/;
    if(foodInput.value.match(letters)){
        savedInput = foodInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/Picker/" + savedInput;
        urlCall(sayHelloUrl)
    }else{
        foodReturn.textContent = "enter a valid response";
    }
}