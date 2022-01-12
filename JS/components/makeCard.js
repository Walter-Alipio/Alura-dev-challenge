import { getProject } from "./localStorage.js";

export const CommunityPage = ()=>{
    const projects = getProject();
    const community = document.querySelector('[data-comunidades]');

    function makeCard(project){
        const line = document.createElement('li');
        line.classList.add('linha');
        const card = `<article class="cartao__comunidade" data-comunidades>
<div class="cartao__cor" style="background-color:${project.info.projColor};">
    <div class="cartao__cor--fundo">
        <pre class="cartao__pre"><code class="cartao__area-code language-${project.info.projLinguage}">
            </code></pre>
        </div>
    </div>
    <div class="cartao__conteudo">
        <h3 class="projeto__titulo">${project.info.projName}</h3>
        <p class="projeto__descricao">${project.info.projDescription}</p>
        <div class="cartao__conteudo-botoes " data-cartao-botoes>
          <div>
            <button class="botao__comentarios"><i class="fas fa-comment"></i>9</button>
            <button class="botao__curtidas" data-botao="curtidas"><i class="fas fa-heart" data-botao="coracao"></i>
            <span data-id="${project.id}">${project.info.projLikesCounting}</span></button>
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
        line.querySelector('code').textContent = project.info.projCode;
    
        if(project.info.projLikes){
            line.querySelector('[data-botao="coracao"]').classList.add('botao__curtidas--like');
        }
        return line;
    }
   
    //criando o card para cada projeto armazenhado no localStorage
    projects.forEach((projects)=>{
        const card = makeCard(projects);
        community.appendChild(card);    
    })
}