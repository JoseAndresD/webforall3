function listadoLima(){


//PRIMER ARTICULO................................................................................................

  var urlA1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A24&output=csv";


  var A1 = new XMLHttpRequest();
  A1.onreadystatechange = function() {
    if(A1.readyState == 4 && A1.status==200){
      document.getElementById("LA1").innerHTML = A1.responseText;
    }
  };
  A1.open("GET",urlA1,true);
  A1.send(null);


  

  var urlA2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D24&output=csv";


  A2 = new XMLHttpRequest();
  A2.onreadystatechange = function() {
    if(A2.readyState == 4 && A2.status==200){
      document.getElementById("LA2").innerHTML = A2.responseText;
    }
  };
  A2.open("GET",urlA2,true);
  A2.send(null);

//SEGUNDO ARTICULO................................................................................................

  var urlB1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A25&output=csv";


  B1 = new XMLHttpRequest();
  B1.onreadystatechange = function() {
    if(B1.readyState == 4 && B1.status==200){
      document.getElementById("LB1").innerHTML = B1.responseText;
    }
  };
  B1.open("GET",urlB1,true);
  B1.send(null);

  var urlB2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D25&output=csv";


  B2 = new XMLHttpRequest();
  B2.onreadystatechange = function() {
    if(B2.readyState == 4 && B2.status==200){
      document.getElementById("LB2").innerHTML = B2.responseText;
    }
  };
  B2.open("GET",urlB2,true);
  B2.send(null);

//TERCER ARTICULO................................................................................................

  var urlC1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A26&output=csv";


  C1 = new XMLHttpRequest();
  C1.onreadystatechange = function() {
    if(C1.readyState == 4 && C1.status==200){
      document.getElementById("LC1").innerHTML = C1.responseText;
    }
  };
  C1.open("GET",urlC1,true);
  C1.send(null);

  var urlC2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D26&output=csv";


  C2 = new XMLHttpRequest();
  C2.onreadystatechange = function() {
    if(C2.readyState == 4 && C2.status==200){
      document.getElementById("LC2").innerHTML = C2.responseText;
    }
  };
  C2.open("GET",urlC2,true);
  C2.send(null);

//CUARTO ARTICULO................................................................................................

  var urlD1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A27&output=csv";


  D1 = new XMLHttpRequest();
  D1.onreadystatechange = function() {
    if(D1.readyState == 4 && D1.status==200){
      document.getElementById("LD1").innerHTML = D1.responseText;
    }
  };
  D1.open("GET",urlD1,true);
  D1.send(null);

  var urlD2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D27&output=csv";


  D2 = new XMLHttpRequest();
  D2.onreadystatechange = function() {
    if(D2.readyState == 4 && D2.status==200){
      document.getElementById("LD2").innerHTML = D2.responseText;
    }
  };
  D2.open("GET",urlD2,true);
  D2.send(null);

//QUINTO ARTICULO................................................................................................

  var urlE1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A28&output=csv";


  E1 = new XMLHttpRequest();
  E1.onreadystatechange = function() {
    if(E1.readyState == 4 && E1.status==200){
      document.getElementById("LE1").innerHTML = E1.responseText;
    }
  };
  E1.open("GET",urlE1,true);
  E1.send(null);

  var urlE2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D28&output=csv";


  E2 = new XMLHttpRequest();
  E2.onreadystatechange = function() {
    if(E2.readyState == 4 && E2.status==200){
      document.getElementById("LE2").innerHTML = E2.responseText;
    }
  };
  E2.open("GET",urlE2,true);
  E2.send(null);

  //SEXTO ARTICULO................................................................................................

  var urlF1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A29&output=csv";


  F1 = new XMLHttpRequest();
  F1.onreadystatechange = function() {
    if(F1.readyState == 4 && F1.status==200){
      document.getElementById("LF1").innerHTML = F1.responseText;
    }
  };
  F1.open("GET",urlF1,true);
  F1.send(null);

  var urlF2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D29&output=csv";


  F2 = new XMLHttpRequest();
  F2.onreadystatechange = function() {
    if(F2.readyState == 4 && F2.status==200){
      document.getElementById("LF2").innerHTML = F2.responseText;
    }
  };
  F2.open("GET",urlF2,true);
  F2.send(null);

//SETIMO ARTICULO................................................................................................

  var urlG1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A30&output=csv";


  G1 = new XMLHttpRequest();
  G1.onreadystatechange = function() {
    if(G1.readyState == 4 && G1.status==200){
      document.getElementById("LG1").innerHTML = G1.responseText;
    }
  };
  G1.open("GET",urlG1,true);
  G1.send(null);

  var urlG2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D30&output=csv";


  G2 = new XMLHttpRequest();
  G2.onreadystatechange = function() {
    if(G2.readyState == 4 && G2.status==200){
      document.getElementById("LG2").innerHTML = G2.responseText;
    }
  };
  G2.open("GET",urlG2,true);
  G2.send(null);

  //OCTAVO ARTICULO................................................................................................

  var urlH1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A31&output=csv";


  H1 = new XMLHttpRequest();
  H1.onreadystatechange = function() {
    if(H1.readyState == 4 && H1.status==200){
      document.getElementById("LH1").innerHTML = H1.responseText;
    }
  };
  H1.open("GET",urlH1,true);
  H1.send(null);

  var urlH2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D31&output=csv";


  H2 = new XMLHttpRequest();
  H2.onreadystatechange = function() {
    if(H2.readyState == 4 && H2.status==200){
      document.getElementById("LH2").innerHTML = H2.responseText;
    }
  };
  H2.open("GET",urlH2,true);
  H2.send(null);

 //NOVENO ARTICULO................................................................................................

  var urlI1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A32&output=csv";


  I1 = new XMLHttpRequest();
  I1.onreadystatechange = function() {
    if(I1.readyState == 4 && I1.status==200){
      document.getElementById("LI1").innerHTML = I1.responseText;
    }
  };
  I1.open("GET",urlI1,true);
  I1.send(null);

  var urlI2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D32&output=csv";


  I2 = new XMLHttpRequest();
  I2.onreadystatechange = function() {
    if(I2.readyState == 4 && I2.status==200){
      document.getElementById("LI2").innerHTML = I2.responseText;
    }
  };
  I2.open("GET",urlI2,true);
  I2.send(null);

   //DECIMO ARTICULO................................................................................................

  var urlJ1="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A33&output=csv";


  J1 = new XMLHttpRequest();
  J1.onreadystatechange = function() {
    if(J1.readyState == 4 && J1.status==200){
      document.getElementById("LJ1").innerHTML = J1.responseText;
    }
  };
  J1.open("GET",urlJ1,true);
  J1.send(null);

  var urlJ2="https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D33&output=csv";


  J2 = new XMLHttpRequest();
  J2.onreadystatechange = function() {
    if(J2.readyState == 4 && J2.status==200){
      document.getElementById("LJ2").innerHTML = J2.responseText;
    }
  };
  J2.open("GET",urlJ2,true);
  J2.send(null);

//........................................................



}
