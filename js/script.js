
$(document).ready(function(){
 
 listadoPortada();

$("#titulo1").on('click', function(){
     window.location = "articulo.html";
     pasarVariables("articulo.html", "AAA=2");
});

$("#titulo2").on('click', function(){
     window.location = "articulo.html";    
     
    pasarVariables("articulo.html", "AAA=3");
});

$("#titulo3").on('click', function(){
     window.location = "articulo.html";    
     

     pasarVariables("articulo.html", "AAA=4");
});

$("#titulo4").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 5;

     pasarVariables("articulo.html", "AAA=5");
});

$("#titulo5").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 6;

     pasarVariables("articulo.html", "AAA=6");
});

$("#titulo6").on('click', function(){
     window.location = "articulo.html";   
     var AAA = 7; 

     pasarVariables("articulo.html", "AAA=7");
});

$("#titulo7").on('click', function(){
     window.location = "articulo.html";   
     var AAA = 8; 

     pasarVariables("articulo.html", "AAA=8");
});

$("#titulo8").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 9;

     pasarVariables("articulo.html", "AAA=9");
});

$("#titulo9").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 10;

     pasarVariables("articulo.html", "AAA=10");
});

$("#titulo10").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 11;

     pasarVariables("articulo.html", "AAA=11");
});

$("#buttom2").on('click', function(){
	window.location = "politica.html";
   
});

$("#buttom1").on('click', function(){
	window.location = "lima.html";
   
});




});