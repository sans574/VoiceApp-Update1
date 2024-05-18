var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var endaiuande = document.getElementById("endaiuande");

function startUp() {
    console.log("teste");
    endaiuande.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
   
    var meuBolso = event.results[0][0].transcript;
    
    endaiuande.innerHTML = meuBolso;

    if (meuBolso == "tire minha selfie") {
        speak();
    }
}

function speak() {
   
    var synth = window.speechSynthesis;

    var textoFala = "Não vou tirar sua selfie, não sou obrigado";

    var oChelseaERendaFixa = new SpeechSynthesisUtterance(textoFala);

    synth.speak(oChelseaERendaFixa);

    Webcam.attach(camera);

    setTimeout(function () {
        takeSelfie();
        save();
    }, 5000);
}

camera = document.getElementById("kanoeste");

Webcam.set({
  
    Width: 360, 
    Height: 250, 
    image_format: 'jpeg ',
    jpeg_quality: 25
});

function takeSelfie() {

    Webcam.snap(function (data_uri) {
        document.getElementById("kanoleste").innerHTML = '<img id="selfieImage" src=" ' + data_uri + ' " />';
    });
}

function save()
{
 
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src ;
  link.href = image;
  link.click();
} 