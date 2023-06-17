const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.hamburger-menu');

btn.addEventListener('click', function(){
    nav.classList.toggle('hidden');  
     
});



//counter

const counters = document.querySelectorAll('.count');
const interval = 5000;

counters.forEach((counter) =>{

    let startValue = 0;
    let endValue =+ counter.getAttribute('data-target');

    let duration = Math.floor(interval / endValue);

    let countStart = setInterval(function(){

        startValue += 1;
        counter.textContent = startValue;

        if (startValue == endValue) {

            clearInterval(countStart)
            
        }

    } ,duration);

  
});