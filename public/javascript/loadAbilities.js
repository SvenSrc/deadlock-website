const videoMap = new Map();


export function loadAbilities(){

    const findAbilityData = JSON.parse(localStorage.getItem("dataClickedHero"));

    const abilityID = new Map();

    abilityID.set("Ability 1", findAbilityData.items.signature1);
    abilityID.set("Ability 2", findAbilityData.items.signature2);
    abilityID.set("Ability 3", findAbilityData.items.signature3);
    abilityID.set("Ability 4", findAbilityData.items.signature4);

    console.log(abilityID);

    const dataAbility = JSON.parse(localStorage.getItem("Items / Abilities"));

    var slot = 1;

    abilityID.forEach((values, keys) => {
        for(var i = 0; i < dataAbility.length; i++){
            if(dataAbility[i].id == values){
                document.getElementById(`ability${slot}name`).innerHTML = dataAbility[i].name;

                videoMap.set(`ability${slot}video`, dataAbility[i].video);

                const imgNode = document.createElement("img");
                imgNode.src = dataAbility[i].image;
                imgNode.alt = dataAbility[i].name;
                imgNode.id = `ability${slot}img`;
                imgNode.classList.add("imgAbility");

                document.getElementById(`ability${slot}`).appendChild(imgNode); 

                slot++;
                break;
            }
        }
    })
    console.log(videoMap);

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
let video = document.getElementById("videoAbility");
function loadVideo(int){
    video.pause();
    video.setAttribute("src", videoMap.get(`ability${int}video`));

    video.load();
    video.play();
}