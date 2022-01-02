(()=>{  //encapsulando o código js
  
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