var previsao1 = "";
var previsao2 = "";
Webcam.set({
    width:350,
    height:300,
    imageFormat:"png",
    pngQuality:1080
});
document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">'
    });
};
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PoqlSi8x9/model.json",modelLoad);
function modelLoad(){
    console.log("model load")
}
function speak(){
    var synth = window.speechSynthesis;
    var speakData1 = "a primeira previsao é" + previsao1;
    var speakData2 = "e a segunda previsao é" + previsao2;
    var utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(utterThis);
}