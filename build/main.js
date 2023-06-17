const btn = document.querySelector('.hamburger');
const nav = document.querySelector('.hamburger-menu');

btn.addEventListener('click', function(){
    nav.classList.toggle('hidden');
    
    
    
});

//smooth scroll

const scroll = new SmoothScroll('.navbar . a[href*="#"]', {
	speed: 300
});