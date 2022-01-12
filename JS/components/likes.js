import { getProject } from "./localStorage.js";
export const likes = ()=>{

    const likeButton = document.querySelectorAll('[data-botao="curtidas"]');

    
    likeButton.forEach(function(button){
        button.addEventListener('click',()=>{
          const heart = button.firstChild;  //pega o primeiro nó "tag i"
          heart.classList.toggle('botao__curtidas--like');
    
          let count = parseInt(button.lastChild.textContent);
          const heartLength = heart.classList.length; //pega a quantidade de classes em heart
          button.lastChild.textContent = counter(heartLength, count); //adiciona o texto ao span
          saveLikes();
        })
    })
    function counter(heartLength, count){   //atualiza contador
        if(heartLength >2){
            count++;
        }else{
            count--;
        }
        return count;
    }
    const saveLikes = ()=>{
        const projects = getProject();
        projects.forEach((card)=>{
            const numberOfLikes = document.querySelector(`[data-id="${card.id}"]`).textContent;  //pega a quantidade de likes da tela

            if(numberOfLikes != card.info.projLikes){
                card.info.projLikes = !card.info.projLikes;    //inverte o valor do projLikes
            }

            card.info.projLikesCounting = numberOfLikes;
            localStorage.setItem("project", JSON.stringify(projects));
        })
    }
}