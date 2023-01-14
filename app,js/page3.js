let firstQuestInput = document.getElementById("firstQuestInput");
let secondQuestInput = document.getElementById("secondQuestInput");
let askingReturn = document.getElementById("askingReturn");



let savedInput = "";
let savedInputTwo ="";
let sayHelloUrl = "";



firstQuestInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstQuestInput, secondQuestInput)}
})

secondQuestInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(firstQuestInput, secondQuestInput)}
})




function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        askingReturn.textContent = data
        console.log(askingReturn)
    }
  )
}

function helloApi(firstQuestInput, secondQuestInput){
   
    if(firstQuestInput && secondQuestInput){
        savedInput = firstQuestInput.value;
        savedInputTwo = secondQuestInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/asking/" + savedInput + "/" + savedInputTwo;
        urlCall(sayHelloUrl)
    }else{
        askingReturn.textContent = "enter a valid response";
    }
}