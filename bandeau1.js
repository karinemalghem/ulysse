function myFunction(x) {
    x.classList.toggle("change");
    
    
    // function on() {
      document.getElementById("overlay").style.display = "block";
  // }
}

$("button").click(function() {
  $(".overlay").toggle("slow");
});
