
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
favicon.setAttribute("href", dataClickedHero.images.minimap_image);
document.head.appendChild(favicon);

// Add Stats
document.getElementById("hero").innerHTML = clickedHero;

document.getElementById("maxMoveSpeed").innerHTML = dataClickedHero.starting_stats.max_move_speed.value;
// document.getElementById("crouchSpeed").innerHTML = dataClickedHero.starting_stats.crouch_speed;
// document.getElementById("moveAcceleration").innerHTML = dataClickedHero.starting_stats.move_acceleration;
document.getElementById("lightMelee").innerHTML = dataClickedHero.starting_stats.light_melee_damage.value;
document.getElementById("heavyMelee").innerHTML = dataClickedHero.starting_stats.heavy_melee_damage.value;
document.getElementById("maxHealth").innerHTML = dataClickedHero.starting_stats.max_health.value;

let stamina = dataClickedHero.starting_stats.stamina.value;

for(let i = 0; i < stamina; i++){
    const square = document.createElement("div");
    square.style.margin = "10px";
    square.style.backgroundColor = "white";
    square.style.width = "90px";
    square.style.height = "20px";

    document.getElementById("stamina").appendChild(square);
}

// Weapon stats are loaded in loadAbilites.js because of needed source/API

// Add/Change Image
const imgNode = document.createElement("img");
imgNode.src = dataClickedHero.images.icon_hero_card;
imgNode.alt = clickedHero;
imgNode.classList.add("imgHero");

document.getElementById("heroImage").appendChild(imgNode);

// Add Text
document.getElementById("herodesc").innerHTML = dataClickedHero.description.lore
document.getElementById("herorole").innerHTML = dataClickedHero.description.role
document.getElementById("heroplay").innerHTML = dataClickedHero.description.playstyle

// Change Header and Background colour
document.getElementById("header").style["background-color"] = "rgb(" + dataClickedHero.colors.ui[0] + ", " + dataClickedHero.colors.ui[1] + ", " + dataClickedHero.colors.ui[2] + ")";

// Get All Abilities
loadAbilities();
