(()=>{  //encapsulando o código js
    const menu = document.querySelector('[data-menu="ativar"]');
    const conteudo = document.querySelector('[data-menu="conteudo"]');
    const iconeMenu = document.querySelector('[data-menu="icone"]');


    menu.addEventListener('click',()=>{ //atera o icone e abre o menu
        iconeMenu.classList.toggle('fa-times');
        conteudo.classList.toggle('menu__lateral__mobile-ativo');
        
    })
})()