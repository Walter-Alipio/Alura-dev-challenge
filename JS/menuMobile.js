(()=>{
    //atera o icone e abre o menu mobile
    const menu = document.querySelector('[data-menu="ativar"]');
    const conteudo = document.querySelector('[data-menu="conteudo"]');
    const iconeMenu = document.querySelector('[data-menu="icone"]');
    const userPhoto = document.querySelector('[data-menu="usuario"]')
    
    menu.addEventListener('click',()=>{ 
        iconeMenu.classList.toggle('fa-times');
        conteudo.classList.toggle('menu__mobile-ativo');
        conteudo.classList.toggle('menu');
        userPhoto.classList.toggle('hide');
    })
    
    //altera o icone e abre campo de busca mobile
    const searchBar = document.querySelector('[data-buscaMobile="bar"]');
    const searchButton = document.querySelector('[data-buscaMobile="button"]')
    const searchIcon = document.querySelector('[data-buscaMobile="icone"]');
    const logoAlura = document.querySelector('[data-buscaMobile="logo"]');
    
    searchButton.addEventListener('click', ()=>{
        searchIcon.classList.toggle('fa-times');
        searchBar.classList.toggle('barra__busca--bar');
        searchBar.classList.toggle('hide');
        logoAlura.classList.toggle('hide');
        menu.classList.toggle('hide');
    })    
})()
