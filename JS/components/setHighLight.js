export const setHighlight = ()=>{
    const linguage = document.querySelector('[data-highlight="linguagem"]');
    const codeArea = document.querySelector('[data-highlight="window"]');
    
    const code = codeArea.innerText;    //pega apenas o conteúdo textual e não as tags
    codeArea.innerHTML = `<code class="textarea hljs ${linguage.value}" contenteditable="true" aria-label="Editor de código" data-highlight="areaCode"></code>`;
    codeArea.querySelector('code').textContent = code; //usado para manter as quebras de linha
    hljs.highlightElement(codeArea.querySelector('code'));
}