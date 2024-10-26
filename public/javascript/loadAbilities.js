const videoMap = new Map();

export function loadAbilities(){

    const findAbilityData = JSON.parse(localStorage.getItem("dataClickedHero"));

    const abilityID = new Map();

    abilityID.set("Ability 1", findAbilityData.items.signature1);
    abilityID.set("Ability 2", findAbilityData.items.signature2);
    abilityID.set("Ability 3", findAbilityData.items.signature3);
    abilityID.set("Ability 4", findAbilityData.items.signature4);
    abilityID.set("Weapon Stat", findAbilityData.items.weapon_primary);

    console.log(abilityID);

    const dataAbility = JSON.parse(localStorage.getItem("Items / Abilities"));

    var slot = 1;

    abilityID.forEach((values, keys) => {
        for(var i = 0; i < dataAbility.length; i++){
            if(dataAbility[i].class_name == values && dataAbility[i].type == "ability"){
                document.getElementById(`ability${slot}name`).innerHTML = "<p>" + dataAbility[i].name + "</p>";

                videoMap.set(`ability${slot}video`, dataAbility[i].videos.webm);

                const imgNode = document.createElement("img");
                imgNode.src = dataAbility[i].image;
                imgNode.alt = dataAbility[i].name;
                imgNode.id = `ability${slot}img`;
                imgNode.classList.add("imgAbility");

                console.log(dataAbility[i].name);

                document.getElementById(`ability${slot}`).appendChild(imgNode); 

                slot++;
                break;
            }else if (dataAbility[i].class_name == values && dataAbility[i].type == "weapon"){
                console.log("Weapon Stats")
                document.getElementById("bulletdamage").innerHTML = dataAbility[i].weapon_info.bullet_damage;
                document.getElementById("clipsize").innerHTML = dataAbility[i].weapon_info.clip_size;
                document.getElementById("cycletime").innerHTML = dataAbility[i].weapon_info.cycle_time;
                break;
            }
        }
    })
    console.log(videoMap);

    document.getElementById("overlay").addEventListener("click", () => {
        closeVideo();
    })

    document.getElementById("ability1img").addEventListener("click", () => {
        loadVideo(1);
    });
    document.getElementById("ability2img").addEventListener("click", () => {
        loadVideo(2);
    });
    document.getElementById("ability3img").addEventListener("click", () => {
        loadVideo(3);
    });
    document.getElementById("ability4img").addEventListener("click", () => {
        loadVideo(4);
    });
}

let int;
let videoAbility = document.getElementById("videoAbility");
function loadVideo(int){
    overlay.style.display = "block";
    videoAbility.style.display = "block";

    videoAbility.setAttribute("src", videoMap.get(`ability${int}video`));
}

function closeVideo(){
    overlay.style.display = "none";
    videoAbility.style.display = "none";

    videoAbility.setAttribute("src", "");
}