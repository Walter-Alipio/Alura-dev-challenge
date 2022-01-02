(() =>{
    const likeButton = document.querySelectorAll('[data-botao="curtidas"]');
    likeButton.forEach(function(button){
        button.addEventListener('click',()=>{
          const heart = button.firstChild;  //pega o primeiro nó "i"
          heart.classList.toggle('botao__curtidas--like');

          let count = parseInt(button.lastChild.textContent);
          const heartLength = heart.classList.length; //pega a quantidade de classes em heart
          button.lastChild.textContent = counter(heartLength, count); //adiciona o texto ao span
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
})()