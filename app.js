
let buttons = document.querySelector('.buttons').children;
let main = document.querySelector('.product').children;


for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        for(let x=0; x< buttons.length; x++){
            buttons[x].classList.remove('active');
        }
        
this.classList.add('active');
    const displayItems = this.getAttribute('data-filter');
    for(let z=0; z<main.length; z++){
         main[z].style.transform = 'scale(0)'; 
        setTimeout(() =>{
            main[z].style.display = 'none'; 
            }, 500);
    if((main[z].getAttribute('data-category') == displayItems)
             || displayItems == 'all'){
                main[z].style.transform = 'scale(1)';
                setTimeout(() =>{
                    main[z].style.display = 'block';
                }, 500);
        }
    }
}
}