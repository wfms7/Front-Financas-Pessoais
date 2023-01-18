import abrirNavBAr from "./nav-menu.js";

const btnNavMenu = document.getElementById('menu-nav');
const today =document.querySelector('[data-today]');

const timeElapsed  = Date.now();
const todayresult = new Date(timeElapsed);


today.innerHTML = todayresult.toLocaleDateString() 

btnNavMenu.addEventListener('click', ()=>{
    abrirNavBAr();
})



