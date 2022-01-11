import { getProject } from "./localStorage.js";

export const saveProject = (event)=>{
    event.preventDefault(); //evita que o formulario tente enviar o input para algum lugar, que é o comportamento padrão do formulário.

    const projectStorage = getProject();

    const codeArea = document.querySelector('[data-highlight="areaCode"]');
    const projetctTitle = document.querySelector('[data-nomeDoProjeto]');
    const projectDescription = document.querySelector('[data-descricao]');
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const linguage = document.querySelector('[data-highlight="linguagem"]');
 
   
    const createId = () =>{     //define o id a partir do tamanho storage, assim cada projeto terá o id seguinte
        const idNumber = projectStorage.length;
        return idNumber;
    }

    //cria o objeto que será armazenado no localStorage
    const save = {
        id: createId(),
        info: {
            projCode: codeArea.textContent,
            projName: projetctTitle.value,
            projDescription: projectDescription.value,
            projLinguage: linguage.value,
            projColor: colorSet.value,
            projLikesCounting: 0,
            projLikes: false
        }
    }

    const clearProject = ()=>{
        projetctTitle.value = "";
        projectDescription.value = "";
        linguage.value="";
        codeArea.textContent= ""; 
    }

    
    const message = document.querySelector("[data-message]");
    if(save.info.projCode && save.info.projName && save.info.projLinguage){
        //armazenando no localStorage
        const projectAtualized = [...projectStorage,save];
        localStorage.setItem("project", JSON.stringify(projectAtualized));
        
        message.classList.add('sucsses');
        message.textContent = "Seu projeto foi salvo em comunidade."

        clearProject();
        setTimeout(() => {
            message.textContent = " ";
            message.classList.remove('sucsses');
        } , 5000);
    }else{
        message.classList.add('failure');
        message.textContent = "O código, nome do projeto e linguagem são obrigatórios. Preencha-os antes de salvar";
    }
}