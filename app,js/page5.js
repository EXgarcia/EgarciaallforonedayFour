let pokeOneInput = document.getElementById("pokeOneInput");
let pokeTwoInput = document.getElementById("pokeTwoInput");
let pokeThreeInput = document.getElementById("pokeThreeInput");
let pokeFourInput = document.getElementById("pokeFourInput");
let pokeFiveInput = document.getElementById("pokeFiveInput");
let pokeSixInput = document.getElementById("pokeSixInput");
let pokeSevenInput = document.getElementById("pokeSevenInput");
let pokeEightInput = document.getElementById("pokeEightInput");
let pokeNineInput = document.getElementById("pokeNineInput");
let pokeTenInput = document.getElementById("pokeTenInput");
let storyReturn = document.getElementById("storyReturn");



let savedInput = "";
let savedInputTwo ="";
let savedInputThree ="";
let savedInputFour ="";
let savedInputFive ="";
let savedInputSix ="";
let savedInputSeven ="";
let savedInputEight ="";
let savedInputNine ="";
let savedInputTen ="";
let sayHelloUrl = "";



pokeOneInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})

pokeTwoInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})
pokeThreeInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})

pokeFourInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})
pokeFiveInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})

pokeSixInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})
pokeSevenInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})

pokeEightInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})
pokeNineInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})

pokeTenInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)}
})



function urlCall(url){
  fetch(url).then(
    response => response.text()
  ).then(
    data =>
    {
        storyReturn.textContent = data
        console.log(storyReturn)
    }
  )
}

function helloApi(pokeOneInput, pokeTwoInput, pokeThreeInput, pokeFourInput, pokeFiveInput, pokeSixInput, pokeSevenInput, pokeEightInput, pokeNineInput, pokeTenInput)
{
    var letters = /^[A-Za-z]+$/;
    if(pokeOneInput.value.match(letters)&& pokeTwoInput.value.match(letters)&& pokeThreeInput.value.match(letters)&& pokeFourInput.value.match(letters)&& pokeFiveInput.value.match(letters)&& pokeSixInput.value.match(letters)&& pokeSevenInput.value.match(letters)&& pokeEightInput.value.match(letters)&& pokeNineInput.value.match(letters)&& pokeTenInput.value.match(letters)){
        savedInput = pokeOneInput.value;
        savedInputTwo = pokeTwoInput.value;
        savedInputThree = pokeThreeInput.value;
        savedInputFour = pokeFourInput.value;
        savedInputFive = pokeFiveInput.value;
        savedInputSix = pokeSixInput.value;
        savedInputSeven = pokeSevenInput.value;
        savedInputEight = pokeEightInput.value;
        savedInputNine = pokeNineInput.value;
        savedInputTen = pokeTenInput.value;
        sayHelloUrl = "https://allforonewebapielizarxavier.azurewebsites.net/AllForOne/mad/" + savedInput + "/" + savedInputTwo + "/" + savedInputThree + "/" + savedInputFour + "/" + savedInputFive + "/" + savedInputSix + "/" + savedInputSeven + "/" + savedInputEight + "/" + savedInputNine + "/" + savedInputTen;
        urlCall(sayHelloUrl)
    }else{
        storyReturn.textContent = "enter a valid response";
    }
}