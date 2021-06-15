//https://teachablemachine.withgoogle.com/models/bn96QA1ez/

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

classify = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bn96QA1ez/model.json' , model_loaded);


function model_loaded(){
console.log("model is loaded...........")
}

function Check(){
    img = document.getElementById("Captured_image");
    classify.classify(img , gotResults);
}

function gotResults(error , results){
   if(error){
       console.error("error");
   }
   else{
       console.log(results)
       document.getElementById("result_person_name").innerHTML = results[0].label;
       accuracy = reults[0].confidence.toFixed(3)*100;
       document.getElementById("result_person_accuracy").innerHTML = accuracy+"%";
   }
}