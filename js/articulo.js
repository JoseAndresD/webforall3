$(document).ready(function(){
  
  //...........................................................................................

cadVariables = location.search.substring(1,location.search.length);
arrVariables = cadVariables.split("&");
for (i=0; i<arrVariables.length; i++) {
  arrVariableActual = arrVariables[i].split("=");
  if (isNaN(parseFloat(arrVariableActual[1])))
    eval(arrVariableActual[0]+"="+unescape(arrVariableActual[1])+"';");
  else
    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
}



//...............................................................................................

$("#buttomA1").on('click', function(){
     window.location = "index.html";    
     
     pasarVariables("articulo.html", "AAA=0");
});

$("#buttomA2").on('click', function(){
     window.location = "index.html";    
     
     pasarVariables("articulo.html", "AAA=0");
});
  
  //..........................................................................................
  
  var U11 = "https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=A";

  var U12 = "&output=csv";


  var url=U11+AAA+U12;


  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status==200){
      document.getElementById("art1").innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET",url,true);
  xmlhttp.send(null);


  var U21 = "https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=D";

  var U22 = "&output=csv";


  var url2=U21+AAA+U22;



  xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.onreadystatechange = function() {
    if(xmlhttp2.readyState == 4 && xmlhttp2.status==200){
      document.getElementById("art2").innerHTML = xmlhttp2.responseText;
    }
  };
  xmlhttp2.open("GET",url2,true);
  xmlhttp2.send(null);

  
 
  var U31 = "https://docs.google.com/spreadsheets/d/1fKPsT6XDsw_hgbvuq4S-Vr993IqogcXfJUrMQflDdo8/pub?gid=0&single=true&range=E";

  var U32 = "&output=csv";


  var url3=U31+AAA+U32;


  xmlhttp3 = new XMLHttpRequest();
  xmlhttp3.onreadystatechange = function() {
    if(xmlhttp3.readyState == 4 && xmlhttp3.status==200){
      document.getElementById("art3").innerHTML = xmlhttp3.responseText;
    }
  };
  xmlhttp3.open("GET",url3,true);
  xmlhttp3.send(null);




});