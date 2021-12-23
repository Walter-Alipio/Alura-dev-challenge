(() =>{
    const likeButton = document.querySelectorAll('[data-botao="curtidas"]');
  
    likeButton.forEach(function(button){
        button.addEventListener('click',()=>{
          const heart = button.firstChild;
          let count = parseInt(button.lastChild.textContent);
            heart.classList.toggle('botao__curtidas--like');

            if(heart.classList.length >2){
                count++;
                button.lastChild.textContent = count;
            }else{
                count--;
                button.lastChild.textContent = count;
            }
            console.log(count)
            console.log(heart.classList);
        })
    })
})()