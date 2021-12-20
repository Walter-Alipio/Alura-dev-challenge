(() =>{
    const likeButton = document.querySelectorAll('[data-botao="curtidas"]');
   
    for(let i=0; i<likeButton.length;i++){
        likeButton[i].addEventListener('click',()=>{
            const likeButtonHeart = document.querySelectorAll('[data-botao="coracao"]');
            let counter = document.querySelectorAll('[data-botao="contador"]');
            let aux = parseInt(counter[i].textContent);
            

            likeButtonHeart[i].classList.toggle('botao__curtidas--like');

            const LikeHeartClass = likeButtonHeart[i].classList;
            console.log(LikeHeartClass);
    
            for(let j=0; j < LikeHeartClass.length; j++){
                if(LikeHeartClass[j] == 'botao__curtidas--like'){
                    aux+=1;
                    counter[i].textContent = aux; 
                    console.log("curti",counter[i].textContent)
                    return ;
                }
            }
            
            aux-=1;
            counter[i].textContent = aux; 
            
            console.log("não curti",counter[i].textContent);
            
        })
    }
})()