window.onload =init;

function init(){


    function myFunction(x) {
        x.classList.toggle("change");
        
            // document.getElementById("overlay").style.display = "none";
    }

    const overlay = document.getElementById("overlay");

    overlay.addEventListener("click", function() {
        overlay.setAttribute("style", "display : none")
    })

}