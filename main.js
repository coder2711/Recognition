//https://teachablemachine.withgoogle.com/models/VQ5_uV4FD/

Webcam.set({
    width : 350,
    height : 300,
    image_format : 'jpeg',
    jpeg_quality : 100
});

webcam = document.getElementById("camera");

Webcam.attach(webcam);

function take_picture(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML='<img id="Captured_image" src="'+image+'"/>';
    });
}

console.log("ml5 version : " , ml5.version);

classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VQ5_uV4FD/model.json' , model_loaded);


function model_loaded(){
console.log("model is loaded...........")
}