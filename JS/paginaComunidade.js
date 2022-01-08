import { getProject } from "./components/localStorage.js";

export const CommunityPage = ()=>{
    const projects = getProject();
    const community = document.querySelector('[data-comunidades]');

    function makeCard(project){
        const line = document.createElement('li');
        const card = `<article class="cartao__comunidade" data-comunidades>
<div class="cartao__cor" style="background-color:${project.projColor};">
    <div class="cartao__cor--fundo">
        <pre class="cartao__pre"><code class="cartao__area-code language-javascript">${project.projCode}
            </code></pre>
        </div>
    </div>
    <div class="cartao__conteudo">
        <h3 class="projeto__titulo">${project.projName}</h3>
        <p class="projeto__descricao">${project.projDescription}</p>
        <div class="cartao__conteudo-botoes " data-cartao-botoes>
          <div>
            <button class="botao__comentarios"><i class="fas fa-comment"></i>9</button>
            <button class="botao__curtidas" data-botao="curtidas"><i class="fas fa-heart" data-botao="coracao"></i><span data-botao="contador">9</span></button>
          </div>
          <div class="projeto__usuario"> 
            <button class="projeto__usuario-botao">                           
                <img src="assets/Header/Photo.png" alt="Foto do perfil" class="foto__perfil">
                <p class="login__name">@Harry</p>
            </button>
        </div>
    </div>
</div>
</article>`
        line.innerHTML = card;
         return line;
    }

    projects.forEach((projects)=>{
        const card = makeCard(projects);
        console.log(card);
        community.appendChild(card);    

    })
    
}