(()=>{  //encapsulando o código js
    const menu = document.querySelector('[data-menu="ativar"]');
    const conteudo = document.querySelector('[data-menu="conteudo"]');
    const iconeMenu = document.querySelector('[data-menu="icone"]');

    

//atera o icone e abre o menu mobile
    menu.addEventListener('click',()=>{ 
        iconeMenu.classList.toggle('fa-times');
        conteudo.classList.toggle('menu__lateral__mobile-ativo');
    })

//input color alterando a borda do text area
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const windowColor = document.querySelector('[data-color="windowColor"]');

    colorSet.addEventListener('input',()=>{
      windowColor.style.backgroundColor = colorSet.value;
    })

})()