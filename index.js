const bulb = document.querySelector('#image');
const button = document.querySelector("#btn")
button.addEventListener('click', function(){
    if(bulb.src.match("./bulbOff.png")){
    bulb.src="./bulbOn.png";
    button.innerHTML="TurnOff";
    }else{
        bulb.src="./bulbOff.png"
        button.innerHTML="TurnOn";
    }
})