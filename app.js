let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#ip-txt");
let outputDiv = document.querySelector("#op-txt");

let serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something is broken, try again after some time")
}

function clickHandler() {
    let inputText = textInput.value; //Taking the input

    //calling server
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated)
        .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);

