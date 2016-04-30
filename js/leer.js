var synth = window.speechSynthesis;

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
  }
}

populateVoiceList();

//funcion parar para todos las páginas...............................................
function parar(){
  synth.cancel();
}

//buttom para index.html...................................................................

function leerbuttom1(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("atrás");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}


function leerbuttom2(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("siguiente");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

//buttom para articulo.html............................................................

function leerbuttomA1(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("atrás");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

function leerbuttomA2(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("siguiente");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

//buttom para politica.html............................................................

function leerbuttomB1(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("atrás");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

function leerbuttomB2(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("siguiente");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

//buttom para lima.html.................................................................

function leerbuttomL1(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("atrás");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

function leerbuttomL2(){
  event.preventDefault();
  var utterThis = new SpeechSynthesisUtterance("siguiente");
  utterThis.voice = voices[0];
  utterThis.pitch = 1;
  utterThis.rate = 1;
  synth.speak(utterThis);
}

//titulos de index.html.......................................................

function leertitulo1(){

var A1 = document.getElementById('A1').textContent;
var A2 = document.getElementById('A2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(A1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(A2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo2(){

var B1 = document.getElementById('B1').textContent;
var B2 = document.getElementById('B2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(B1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(B2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo3(){

var C1 = document.getElementById('C1').textContent;
var C2 = document.getElementById('C2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(C1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(C2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo4(){

var D1 = document.getElementById('D1').textContent;
var D2 = document.getElementById('D2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(D1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(D2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo5(){

var E1 = document.getElementById('E1').textContent;
var E2 = document.getElementById('E2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(E1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(E2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo6(){

var F1 = document.getElementById('F1').textContent;
var F2 = document.getElementById('F2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(F1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(F2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo7(){

var G1 = document.getElementById('G1').textContent;
var G2 = document.getElementById('G2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(G1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(G2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo8(){

var H1 = document.getElementById('H1').textContent;
var H2 = document.getElementById('H2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(H1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(H2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo9(){

var I1 = document.getElementById('I1').textContent;
var I2 = document.getElementById('I2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(I1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(I2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertitulo10(){

var J1 = document.getElementById('J1').textContent;
var J2 = document.getElementById('J2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(J1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(J2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

//titulos de politica.html.......................................................

function leertituloP1(){

var PA1 = document.getElementById('PA1').textContent;
var PA2 = document.getElementById('PA2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PA1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PA2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP2(){

var PB1 = document.getElementById('PB1').textContent;
var PB2 = document.getElementById('PB2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PB1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PB2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP3(){

var PC1 = document.getElementById('PC1').textContent;
var PC2 = document.getElementById('PC2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PC1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PC2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP4(){

var PD1 = document.getElementById('PD1').textContent;
var PD2 = document.getElementById('PD2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PD1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PD2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP5(){

var PE1 = document.getElementById('PE1').textContent;
var PE2 = document.getElementById('PE2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PE1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PE2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP6(){

var PF1 = document.getElementById('PF1').textContent;
var PF2 = document.getElementById('PF2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PF1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PF2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP7(){

var PG1 = document.getElementById('PG1').textContent;
var PG2 = document.getElementById('PG2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PG1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PG2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP8(){

var PH1 = document.getElementById('PH1').textContent;
var PH2 = document.getElementById('PH2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PH1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PH2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP9(){

var PI1 = document.getElementById('PI1').textContent;
var PI2 = document.getElementById('PI2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PI1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PI2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloP10(){

var PJ1 = document.getElementById('PJ1').textContent;
var PJ2 = document.getElementById('PJ2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(PJ1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(PJ2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

//titulos de lima.html...............................................................


function leertituloL1(){

var LA1 = document.getElementById('LA1').textContent;
var LA2 = document.getElementById('LA2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LA1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LA2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL2(){

var LB1 = document.getElementById('LB1').textContent;
var LB2 = document.getElementById('LB2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LB1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LB2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL3(){

var LC1 = document.getElementById('LC1').textContent;
var LC2 = document.getElementById('LC2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LC1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LC2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL4(){

var LD1 = document.getElementById('LD1').textContent;
var LD2 = document.getElementById('LD2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LD1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LD2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL5(){

var LE1 = document.getElementById('LE1').textContent;
var LE2 = document.getElementById('LE2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LE1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LE2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL6(){

var LF1 = document.getElementById('LF1').textContent;
var LF2 = document.getElementById('LF2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LF1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LF2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL7(){

var LG1 = document.getElementById('LG1').textContent;
var LG2 = document.getElementById('LG2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LG1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LG2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL8(){

var LH1 = document.getElementById('LH1').textContent;
var LH2 = document.getElementById('LH2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LH1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LH2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL9(){

var LI1 = document.getElementById('LI1').textContent;
var LI2 = document.getElementById('LI2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LI1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LI2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

function leertituloL10(){

var LJ1 = document.getElementById('LJ1').textContent;
var LJ2 = document.getElementById('LJ2').textContent;

  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(LJ1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);

  var utterThis2 = new SpeechSynthesisUtterance(LJ2);
  utterThis2.voice = voices[0];
  utterThis2.pitch = 1;
  utterThis2.rate = 1;
  synth.speak(utterThis2);
}

//titulos de articulo.html.......................................................

function leertituloarticulo(){
var art1 = document.getElementById('art1').textContent;
  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(art1);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);
}

function leerdescripcion(){
var art2 = document.getElementById('art2').textContent;
  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(art2);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);
}

function leertexto(){
var art3 = document.getElementById('art3').textContent;
  event.preventDefault();
  var utterThis1 = new SpeechSynthesisUtterance(art3);
  utterThis1.voice = voices[0];
  utterThis1.pitch = 1;
  utterThis1.rate = 1;
  synth.speak(utterThis1);
}