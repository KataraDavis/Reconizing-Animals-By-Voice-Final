function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classiifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/THJRpUaVs/model.json', modelReady);
}

var dog=0;
var cat=0;
var lion=0;
var wolf=0;

function modelReady()
{
    classiifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error) 
    {
        console.error(error);
    } else
    {
        console.log(results);
        r = Math.floor(Math.random() * 255 + 1);
        g = Math.floor(Math.random() * 255 + 1);
        b = Math.floor(Math.random() * 255 + 1);

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog= '+dog+' , Cat= '+cat+' , Lion= '+lion+' , Wolf= '+wolf;
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_count").style.color = "rgb("+r+","+g+","+b+")";
        
        img = document.getElementById("listen");

        if (results[0].label == "Barking")
        {
            img.src = 'bark.gif';
            dog = dog + 1;
        }
         else if (results[0].label == "Meowing")
        {
            img.src = 'meow.gif';
            cat = cat + 1;
        }
        else if (results[0].label == "roaing")
        {
            img.src = 'roaring.gif';
            lion = lion + 1;
        }
        else if (results[0].label == "howling")
        {
            img.src = 'howling.gif';
            wolf = wolf + 1
        }else{
            img.src = 'listen.gif';
        }
    }
}