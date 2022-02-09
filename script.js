var animals = ["images/dog.png", "images/cat.png", "images/eagle.png", "images/shrek.png", "images/jelly-fish.png", "images/owl.png",]
var a = document.getElementById("url-input")


function addUrl(x) {
    if (x==1){
    a.value = animals[0]
    }else if(x==2){
        a.value = animals[1]
    }else if(x==3){
        a.value = animals[2]
    }else if(x==4){
        a.value = animals[3]
    }else if(x==5){
        a.value = animals[4]
    }else if(x==6){
        a.value = animals[5]
    }
}
