// adding urls to input with clicking the animal name
var animals = ["images/dog.png", "images/cat.png", "images/eagle.png", "images/shrek.png", "images/jelly-fish.png", "images/owl.png", "images/bird.png"]
var url = document.getElementById("url-input")


function addUrl(x) {
    if (x==1){
        url.value = animals[0]
    }else if(x==2){
        url.value = animals[1]
    }else if(x==3){
        url.value = animals[2]
    }else if(x==4){
        url.value = animals[3]
    }else if(x==5){
        url.value = animals[4]
    }else if(x==6){
        url.value = animals[5]
    }else if(x==7){
        url.value = animals[6]
    }
}


// adding the image pack with clicking add button
var container = document.getElementById("section-img-packs")
var names = document.getElementById("name-input")
// var r = /p/
// /\.[jp][pn]e?g$/i
function addImgPack(){
    // var format = r.test(container.value)
    if(url.value != "" && names.value != "" /* && format */){
    var addDiv = document.createElement("div")
    container.appendChild(addDiv)
    var addImg = document.createElement("img")
    addImg.src = url.value
    addDiv.appendChild(addImg)
    var addh4 = document.createElement("h4")
    addh4.innerHTML = names.value
    addDiv.appendChild(addh4)
    url.value = ""
    names.value = ""}
    // else if(!format){
    //     alert("your image format should be png, jpg or jpeg")
    else{
        alert("fill url and name")
    }
}
