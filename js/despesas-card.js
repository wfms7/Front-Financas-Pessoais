
const btnCardDespesas = document.querySelectorAll('[data-btn-despesas]') ;


function openCard(btnOpen, iconUpDn){

    
    btnOpen.classList.toggle('despesas__continer-dados-ativo');
    iconUpDn.classList.toggle('chevrons-down-icon')
    iconUpDn.classList.toggle('chevrons-up-icon')
}



btnCardDespesas.forEach( btn => {
    
    btn.addEventListener('click', () =>{

        let divprincipal = btn.parentNode;
       // divprincipal = divprincipal.parentNode;
        let btnOpen = divprincipal.querySelector('[data-despesas-container]')
        let iconUpDn = divprincipal.querySelector('[data-icon-UpDn]')

        openCard(btnOpen,iconUpDn)

    } )
})