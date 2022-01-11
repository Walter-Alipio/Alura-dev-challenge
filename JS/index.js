import { saveProject } from "./components/saveProject.js";
import { menuMobile } from "./components/menuMobile.js";

menuMobile();
//input color alterando a borda do text area
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const windowColor = document.querySelector('[data-color="windowColor"]');

    colorSet.addEventListener('input',()=>{
      windowColor.style.backgroundColor = colorSet.value;
    })

//visualizar highlight
    const linguage = document.querySelector('[data-highlight="linguagem"]');
    const codeArea = document.querySelector('[data-highlight="window"]');
    const buttonHighlight = document.querySelector('[data-highlight="button"]');

    const setHighlight = ()=>{
        const code = codeArea.innerText;    //pega apenas o conteúdo textual e não as tags
        codeArea.innerHTML = `<code class="textarea hljs ${linguage.value}" contenteditable="true" aria-label="Editor de código" data-highlight="areaCode"></code>`;
        codeArea.querySelector('code').textContent = code; //usado para manter as quebras de linha
        hljs.highlightElement(codeArea.querySelector('code'));
    }

    buttonHighlight.addEventListener('click', setHighlight);

    //botao salvar
    const saveButton = document.querySelector('[data-salvar]');
    saveButton.addEventListener('click',saveProject)  