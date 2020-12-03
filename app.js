var translateBtn= document.querySelector('#translateBtn');
var userInput=document.querySelector('#userInput');
var output = document.querySelector('#output');
var serverUrl="https://api.funtranslations.com/translate/ubbi-dubbi.json";


//adjust height of background image
var contentHeight= document.querySelector('.place-over-bg').clientHeight;
var minHeight = screen.height;

if(minHeight > contentHeight){
    contentHeight = minHeight;
}

console.log(contentHeight);
var img = document.querySelector('#bg');

img.style.height = contentHeight+"px";


//to add query parameter and key in api url
function createUrl(text){
    return encodeURI(serverUrl+"?"+"text="+text);
}

//to handle server down error
function errorHandler(error){
    console.log("Error is occurred"+error);
    alert("Looks like server is down. Please try again after sometime")
}

//fetch the translated text from json
function translate(){

    fetch(createUrl(userInput.value))
    .then(response => response.json())
    .then(json => {
        output.innerText= json.contents.translated
    })
    .catch(errorHandler);

}

//handling event occurance
translateBtn.addEventListener("click", translate);
