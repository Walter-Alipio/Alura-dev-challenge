import { saveProject } from "./components/saveProject.js";
import { menuMobile } from "./components/menuMobile.js";
import { setHighlight } from "./components/setHighLight.js"

menuMobile();

//input color alterando a borda do text area
    const colorSet = document.querySelector('[data-color="inputColor"]');
    const windowColor = document.querySelector('[data-color="windowColor"]');

    colorSet.addEventListener('input',()=>{
      windowColor.style.backgroundColor = colorSet.value;
    })

    //visualizar highlight
    const buttonHighlight = document.querySelector('[data-highlight="button"]');
    buttonHighlight.addEventListener('click', setHighlight);

    //botao salvar
    const saveButton = document.querySelector('[data-salvar]');
    saveButton.addEventListener('click',saveProject)  