window.onload = init;

function init() {

    const menuBurger = document.getElementById('menu-burger');
    menuBurger.addEventListener('click', function(){
        console.log("biiiiip");
        menuBurger.classList.toggle("change");
    })

    // function myFunction(x) {
    //     x.classList.toggle("change");
    // }

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
   
 
// }
    //$("#froggy").hover(
       // function() { $( "#froggy" ).fadeTo( 'fast', '4'); },
        //function() { $( "#froggy" ).fadeTo( 'fast', '.1'); }
    //);

    //$(".chiant-texte").hover(
        //function() { $( this ).fadeTo( 'fast', '1'); },
        //function() { $( this ).fadeTo( 'fast', '.4'); }
    //);

    // $("#froggy").hover(
    //     function() {
    //         console.log("au revoir");
    //         $("#froggy").css("opacity", 0);
    //     }, 
    //     $(function() {
    //         console.log("coucou");
    //         $("#froggy").css("opacity", 1);
    //     })
    // );


    



//})

    // $("p").hover(function(){
    //     $(this).css("background-color", "yellow");
    // }, $(function(){
    //     $(this).css("background-color", "pink");
    // });


    //1) selectionner l'image et le stocker dans une variable
    //2) pareil pour le Texte 
   // 3) leur ajouter un eventListener - avec l'evenement mouseover
   // 4) dans cet eventlistener, faire une fonction qui change l'attribut opacity qui doit devenir 0 
   // 5) leur ajouter un autre eventListener - avec l'evenement mouseleave
   // 6) dans cet eventlistener, faire une fonction qui change l'attribut opacity qui doit devenir 1


    
    // })
        
    //     c.addEventListener("mouseover",function(){ 
    //     c.setAttribute('opacity', 1);  
    // });

    
    // c.addEventListener("mouseleave",function(){ 
    //     c.setAttribute('opacity', 1);
    // });      
    //     c.addEventListener("mouseleave",function(){ 
    //         c.setAttribute('opacity', 1);