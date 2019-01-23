window.onload = init;

function init() {

    const menuBurger = document.getElementById('menu-burger');
    menuBurger.addEventListener('click', function(){
        console.log("biiiiip");
        menuBurger.classList.toggle("change");
    })

     const froggy = document.getElementsByClassName('froggy');
     const c = document.getElementsByClassName('c');

    for(let i=0; i<=froggy.length; i++){
     froggy[i].addEventListener("mouseover",function(){ 
         froggy[i].setAttribute("style", 'opacity : 0');
        
     })
     c[i].addEventListener("mouseover",function(){ 
        froggy[i].setAttribute("style", 'opacity : 0');
    })
   
     
    
    froggy[i].addEventListener("mouseleave",function(){ 
        froggy[i].setAttribute("style", 'opacity : 1');
    })
    c[i].addEventListener("mouseleave",function(){ 
        froggy[i].setAttribute("style", 'opacity : 0');
   })
  }

}
   