const seccionesPagina = new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction)=>{

        const timeline = new TimelineMax({delay:0.5});
        const timeline2 = new TimelineMax({delay:0.4});
        const timeline3 = new TimelineMax();
        const timeline4 = new TimelineMax();

        const section = destination.item;
        const imagen = section.querySelector('.imagenWeb');
        const sectionTitle = section.querySelector('.sectionTitle');

        const inner = section.querySelector('.overlayContainer');
        const inner2 = section.querySelector('.overlayContainer2');    
           
        timeline.fromTo(imagen, 0.8, {scale: 0.97, y:'-10', opacity: 1}, {scale:1, y:0, opacity: 1})
        timeline2.fromTo(sectionTitle, 0.8, {x:'-200', opacity: 0}, {x:0, opacity: 1})

        timeline3.fromTo(inner, 1, {x:0, opacity: 1, ease: "none"}, {x:'105%', ease: "power2.inOut"});
        timeline4.fromTo(inner2, 1.1, {x:0, opacity: 1, ease: "none"}, {x:'105%', ease: "power2.inOut"});
            
    }
});


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
let navContent = document.querySelector('.nav__content');

menuBtn.addEventListener('click', () =>{
    let fullpage = document.querySelector('#fullpage');
    let navArray = Array.from(document.querySelector('.nav__list').children);
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;

        navArray.forEach((item) => {
            item.firstChild.style.pointerEvents = 'auto';
            item.firstChild.style.cursor = 'pointer';
        });
        
        fullpage.style.zIndex = 0;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        
        navArray.forEach((item) => {
            item.firstChild.style.pointerEvents = 'auto';
            item.firstChild.style.cursor = 'pointer';
        });
        
        setTimeout(()=>{
            fullpage.style.zIndex = 20;
        },600)
    }
});


const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-btn');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	}
	
	const applyListeners = () => {
		menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
		if(element.classList.contains(stringClass)){
            element.classList.remove(stringClass);
        }
		else{
            element.classList.add(stringClass);
            
        }
	}
	
	init();
})();