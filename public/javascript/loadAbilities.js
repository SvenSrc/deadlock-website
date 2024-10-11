
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
                document.getElementById(`ability${slot}`).innerHTML = dataAbility[i].name;

                console.log(dataAbility[i].name);
                console.log(values)

                slot++;

                console.log(slot);
                break;
            }
        }
    })
}