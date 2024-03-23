const button= document.querySelector("button");
const h1=document.querySelector("h1");

button.addEventListener('click',function(){
    const newColor=randomcolor()
    document.body.style.backgroundColor=newColor;
    h1.innerText=newColor

    const [r,g,b]=extractRGB(newColor)

    if(r+g+b<500){
        h1.style.color="white"
    }
    else {
        h1.style.color = "black";
    }
})

//creates random number
function randomcolor(){
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}

function extractRGB(color) {
    // Remove "rgb(" and ")" from the color string
    const rgbString = color.slice(4, -1);
    // Split the color string into an array of RGB values
    const [r, g, b] = rgbString.split(',').map(value => parseInt(value.trim()));
    return [r, g, b];
}