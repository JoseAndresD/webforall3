$(document).ready(function(){
listadoPolitica();


$("#tituloP1").on('click', function(){
     window.location = "articulo.html";
       
     pasarVariables("articulo.html", "AAA=13");
});

$("#tituloP2").on('click', function(){
     window.location = "articulo.html";    
     
    pasarVariables("articulo.html", "AAA=14");
});

$("#tituloP3").on('click', function(){
     window.location = "articulo.html";    
     

     pasarVariables("articulo.html", "AAA=15");
});

$("#tituloP4").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 5;

     pasarVariables("articulo.html", "AAA=16");
});

$("#tituloP5").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 6;

     pasarVariables("articulo.html", "AAA=17");
});

$("#tituloP6").on('click', function(){
     window.location = "articulo.html";   
     var AAA = 7; 

     pasarVariables("articulo.html", "AAA=18");
});

$("#tituloP7").on('click', function(){
     window.location = "articulo.html";   
     var AAA = 8; 

     pasarVariables("articulo.html", "AAA=19");
});

$("#tituloP8").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 9;

     pasarVariables("articulo.html", "AAA=20");
});

$("#tituloP9").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 10;

     pasarVariables("articulo.html", "AAA=21");
});

$("#tituloP10").on('click', function(){
     window.location = "articulo.html";    
     var AAA = 11;

     pasarVariables("articulo.html", "AAA=22");
});

$("#buttomB2").on('click', function(){
	window.location = "lima.html";
   
});

$("#buttomB1").on('click', function(){
	window.location = "index.html";
   
});



});