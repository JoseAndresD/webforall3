// $(document).ready(function(){
  
function listadoPortada(){

var url1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range="

var url2= "&output=csv"

//PRIMER ARTICULO................................................................................................


$( "#A1" ).load( "https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A2&output=csv")

$( "#A2" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D2&output=csv")


//SEGUNDO ARTICULO................................................................................................
  
$( "#B1" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A3&output=csv");

$( "#B2" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D3&output=csv");

//TERCER ARTICULO................................................................................................

$( "#C1" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A4&output=csv");

$( "#C2" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D4&output=csv");

//CUARTO ARTICULO................................................................................................
  
$( "#D1" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A5&output=csv");

$( "#D2" ).load("https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D5&output=csv");


//QUINTO ARTICULO................................................................................................

  var urlE1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A6&output=csv";


  E1 = new XMLHttpRequest();
  E1.onreadystatechange = function() {
    if(E1.readyState == 4 && E1.status==200){
      document.getElementById("E1").innerHTML = E1.responseText;
    }
  };
  E1.open("GET",urlE1,true);
  E1.send(null);

  var urlE2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D6&output=csv";


  E2 = new XMLHttpRequest();
  E2.onreadystatechange = function() {
    if(E2.readyState == 4 && E2.status==200){
      document.getElementById("E2").innerHTML = E2.responseText;
    }
  };
  E2.open("GET",urlE2,true);
  E2.send(null);

  //SEXTO ARTICULO................................................................................................

  var urlF1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A7&output=csv";


  F1 = new XMLHttpRequest();
  F1.onreadystatechange = function() {
    if(F1.readyState == 4 && F1.status==200){
      document.getElementById("F1").innerHTML = F1.responseText;
    }
  };
  F1.open("GET",urlF1,true);
  F1.send(null);

  var urlF2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D7&output=csv";


  F2 = new XMLHttpRequest();
  F2.onreadystatechange = function() {
    if(F2.readyState == 4 && F2.status==200){
      document.getElementById("F2").innerHTML = F2.responseText;
    }
  };
  F2.open("GET",urlF2,true);
  F2.send(null);

//SETIMO ARTICULO................................................................................................

  var urlG1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A8&output=csv";


  G1 = new XMLHttpRequest();
  G1.onreadystatechange = function() {
    if(G1.readyState == 4 && G1.status==200){
      document.getElementById("G1").innerHTML = G1.responseText;
    }
  };
  G1.open("GET",urlG1,true);
  G1.send(null);

  var urlG2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D8&output=csv";


  G2 = new XMLHttpRequest();
  G2.onreadystatechange = function() {
    if(G2.readyState == 4 && G2.status==200){
      document.getElementById("G2").innerHTML = G2.responseText;
    }
  };
  G2.open("GET",urlG2,true);
  G2.send(null);

  //OCTAVO ARTICULO................................................................................................

  var urlH1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A9&output=csv";


  H1 = new XMLHttpRequest();
  H1.onreadystatechange = function() {
    if(H1.readyState == 4 && H1.status==200){
      document.getElementById("H1").innerHTML = H1.responseText;
    }
  };
  H1.open("GET",urlH1,true);
  H1.send(null);

  var urlH2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D9&output=csv";


  H2 = new XMLHttpRequest();
  H2.onreadystatechange = function() {
    if(H2.readyState == 4 && H2.status==200){
      document.getElementById("H2").innerHTML = H2.responseText;
    }
  };
  H2.open("GET",urlH2,true);
  H2.send(null);

 //NOVENO ARTICULO................................................................................................

  var urlI1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A10&output=csv";


  I1 = new XMLHttpRequest();
  I1.onreadystatechange = function() {
    if(I1.readyState == 4 && I1.status==200){
      document.getElementById("I1").innerHTML = I1.responseText;
    }
  };
  I1.open("GET",urlI1,true);
  I1.send(null);

  var urlI2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D10&output=csv";


  I2 = new XMLHttpRequest();
  I2.onreadystatechange = function() {
    if(I2.readyState == 4 && I2.status==200){
      document.getElementById("I2").innerHTML = I2.responseText;
    }
  };
  I2.open("GET",urlI2,true);
  I2.send(null);

   //DECIMO ARTICULO................................................................................................

  var urlJ1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A11&output=csv";


  J1 = new XMLHttpRequest();
  J1.onreadystatechange = function() {
    if(J1.readyState == 4 && J1.status==200){
      document.getElementById("J1").innerHTML = J1.responseText;
    }
  };
  J1.open("GET",urlJ1,true);
  J1.send(null);

  var urlJ2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D11&output=csv";


  J2 = new XMLHttpRequest();
  J2.onreadystatechange = function() {
    if(J2.readyState == 4 && J2.status==200){
      document.getElementById("J2").innerHTML = J2.responseText;
    }
  };
  J2.open("GET",urlJ2,true);
  J2.send(null);

//........................................................



}

// });