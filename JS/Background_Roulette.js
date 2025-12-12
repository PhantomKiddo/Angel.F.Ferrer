const URL = "Library/Libraries.JSON";

const Background = document.getElementsByTagName('html');

function BackgroundRoulette(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}



fetch(URL)
.then(response => response.json())
.then(data => {

    const Value = data.Background.Images;

    randomIndex = BackgroundRoulette(0, Value.length);
    
    Background[0].style.background = "url(" + Value[randomIndex] + ")";
    Background[0].style.backgroundAttachment = "fixed";
    Background[0].style.backgroundRepeat = "no-repeat";
    Background[0].style.backgroundSize = "cover";

    console.log(Value[randomIndex]);
    
});