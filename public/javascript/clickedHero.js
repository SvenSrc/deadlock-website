var clickedHero = localStorage.getItem("clickedHero");
var data = JSON.parse(localStorage.getItem("Heroes"));

var dataClickedHero;

for(var i = 0; i < data.length; i++){
    if(data[i].name == clickedHero){
        console.log(i);

        dataClickedHero = data[i];
        localStorage.setItem("dataClickedHero", JSON.stringify(dataClickedHero));
    }
}

// Change Title and Favicon dynamically
document.title = clickedHero + " Stats";

let header = document.querySelector("head");
let favicon = document.createElement("link");
favicon.setAttribute("rel", "icon");
favicon.setAttribute("href", dataClickedHero.images.minimap);
document.head.appendChild(favicon);

// Change Text fitting to hero
document.getElementById("hero").textContent = clickedHero;