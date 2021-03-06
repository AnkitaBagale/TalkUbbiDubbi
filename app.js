const translateBtn= document.querySelector('#translateBtn');
const userInput=document.querySelector('#userInput');
const output = document.querySelector('#output');
const serverUrl="https://api.funtranslations.com/translate/ubbi-dubbi.json";

const footer =document.querySelector('.footer');
const img = document.querySelector('#bg');
const contentOfPage = document.querySelector('.place-over-bg')


//adjust height of background image
//fixing footer to bottom if screen height is bigger than content height;
window.addEventListener('load', () => {
    let contentHeight= contentOfPage.clientHeight;
    const minHeight = screen.height;

    if(minHeight > contentHeight){
        contentHeight = minHeight;
        footer.classList.add('bottom0');
    }
    img.style.height = contentHeight+"px";
  });

  
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
