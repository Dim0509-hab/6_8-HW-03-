const trafficLightEl = document.querySelector('#trafficLight1');

trafficLightEl.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl.removeEventListener('click', makeGreen);
        
}

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl.removeEventListener('click', makeYellow);
       
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl.removeEventListener('click', makeRed);
}     
