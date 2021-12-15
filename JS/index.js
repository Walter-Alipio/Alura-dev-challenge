(()=>{  //encapsulando o código js
  

//atera o icone e abre o menu mobile
    const menu = document.querySelector('[data-menu="ativar"]');
    const conteudo = document.querySelector('[data-menu="conteudo"]');
    const iconeMenu = document.querySelector('[data-menu="icone"]');

    menu.addEventListener('click',()=>{ 
        iconeMenu.classList.toggle('fa-times');
        conteudo.classList.toggle('menu__lateral__mobile-ativo');
    })

//altera o icone e abre campo de busca mobile

    const searchBar = document.querySelector('[data-buscaMobile="bar"]');
    const searchButton = document.querySelector('[data-buscaMobile="button"]')
    const searchIcon = document.querySelector('[data-buscaMobile="icone"]');
    const logoAlura = document.querySelector('[data-buscaMobile="logo"]');

    searchButton.addEventListener('click', ()=>{
        searchIcon.classList.toggle('fa-times');
        searchBar.classList.toggle('barra__busca--bar');
        logoAlura.classList.toggle('hide');
        menu.classList.toggle('hide');
    })    


//input color alterando a borda do text area
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const windowColor = document.querySelector('[data-color="windowColor"]');

    colorSet.addEventListener('input',()=>{
      windowColor.style.backgroundColor = colorSet.value;
    })

//visualizar highlight
    const linguagem = document.querySelector('[data-highlight="linguagem"]');
    const buttonHighlight = document.querySelector('[data-highlight="button"]');

    const setHighlight = ()=>{
        const codeArea = document.querySelector('[data-highlight="areaCode"]');
        const classList = codeArea.classList;

        codeArea.classList.remove(classList[3]);
        codeArea.classList.remove(classList[2]);
        codeArea.classList.add(linguagem.value);
       
        hljs.highlightElement(codeArea);
    }

    buttonHighlight.addEventListener('click',()=>{
       setHighlight();
    })

})()