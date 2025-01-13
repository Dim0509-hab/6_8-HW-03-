const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

window.addEventListener('click', makeGreen);

function makeGreen() {

    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    window.addEventListener('click', makeYellow);
    window.removeEventListener('click', makeGreen);
        
}

function makeYellow() {

    trafficLightEl2.style.background = ('yellow');
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    window.addEventListener('click', makeRed);
    window.removeEventListener('click', makeYellow);
       
}

function makeRed() {

    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    window.addEventListener('click', makeGreen);
    window.removeEventListener('click', makeRed);
}