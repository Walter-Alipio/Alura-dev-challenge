import { getProject } from "./localStorage.js";

export const saveProject = (event)=>{
    event.preventDefault(); //evita que o formulario tente enviar o input para algum lugar, que é o comportamento padrão do formulário.

    const projectStorage = getProject();
    const codeArea = document.querySelector('[data-highlight="areaCode"]');
    const projetctTitle = document.querySelector('[data-nomeDoProjeto]');
    const projectDescription = document.querySelector('[data-descricao]');
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const linguagem = document.querySelector('[data-highlight="linguagem"]');
        
    const save = {
        projCode: codeArea.textContent,
        projName: projetctTitle.value,
        projDescription: projectDescription.value,
        projLiguagem: linguagem.value,
        projColor: colorSet.value
    }

    const projectAtualized = [...projectStorage,save];
    localStorage.setItem("project", JSON.stringify(projectAtualized));

    console.log(projectAtualized);
}