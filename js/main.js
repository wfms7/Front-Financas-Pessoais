
import abrirNavBAr from "./nav-menu.js";

const btnNavMenu = document.getElementById('menu-nav');
const today =document.querySelector('[data-today]');




function todayNow(){
    
    if (today != null){
        const timeElapsed  = Date.now();
        const todayresult = new Date(timeElapsed);
        today.innerHTML = todayresult.toLocaleDateString() 
    }
    

}
todayNow();



btnNavMenu.addEventListener('click', ()=>{
    abrirNavBAr();
})