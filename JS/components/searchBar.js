
const searchBar = document.querySelector('[data-search]');

searchBar.addEventListener('input', function(){ 
    const content = document.querySelectorAll('.linha');
    
    if(this.value.length > 0){
        content.forEach((card)=>{
            const title = card.querySelector('.projeto__titulo').textContent;
            const regex = new RegExp(this.value, "i"); // "i" representa case insensitive
    
            if( !regex.test(title)){
                card.classList.add('hide');
            }else{
                card.classList.remove('hide');
            }
        })
            
    }else{
        for(let i = 0; i < content.length; i++){
            const card = content[i];
            card.classList.remove('hide');
        }
    }
})