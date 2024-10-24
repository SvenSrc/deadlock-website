
import { loadAbilities } from "./loadAbilities.js";


var clickedHero = localStorage.getItem("clickedHero");
var data = JSON.parse(localStorage.getItem("Heroes"));

var dataClickedHero;

// Data from clicked Hero is separated from the rest
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
document.getElementById("hero").innerHTML = clickedHero;

document.getElementById("maxMoveSpeed").innerHTML = dataClickedHero.starting_stats.max_move_speed;
document.getElementById("crouchSpeed").innerHTML = dataClickedHero.starting_stats.crouch_speed;
document.getElementById("moveAcceleration").innerHTML = dataClickedHero.starting_stats.move_acceleration;
document.getElementById("lightMelee").innerHTML = dataClickedHero.starting_stats.light_melee_damage;
document.getElementById("heavyMelee").innerHTML = dataClickedHero.starting_stats.heavy_melee_damage;
document.getElementById("maxHealth").innerHTML = dataClickedHero.starting_stats.max_health;
document.getElementById("stamina").innerHTML = dataClickedHero.starting_stats.stamina;



// Add/Change Image
const imgNode = document.createElement("img");
imgNode.src = dataClickedHero.images.card;
imgNode.alt = clickedHero;
imgNode.classList.add("imgHero");

document.getElementById("heroImage").appendChild(imgNode);

// Add Text
document.getElementById("herodesc").innerHTML = dataClickedHero.lore
document.getElementById("herorole").innerHTML = dataClickedHero.role
document.getElementById("heroplay").innerHTML = dataClickedHero.playstyle

// Change Header and Background colour
document.getElementById("header").style["background-color"] = "rgb(" + dataClickedHero.color_ui[0] + ", " + dataClickedHero.color_ui[1] + ", " + dataClickedHero.color_ui[2] + ")";

// Get All Abilities
loadAbilities();
