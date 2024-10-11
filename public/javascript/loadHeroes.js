
const url = "localhost:3000";

fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.log(data);

        outputData(data[0]);

        // Set the json to the Local Storage
        localStorage.setItem("Heroes", JSON.stringify(data[0]));
        localStorage.setItem("Items / Abilities", JSON.stringify(data[1]));
    });

// Create image Layout
function outputData(data){
    for(var i = 0; i < data.length; i++){
        // console.log(data[i].name);
        
        // Get each Hero that is currently in game
        if(data[i].player_selectable == true && data[i].in_development == false && data[i].disabled == false){
            // Create each section of hero
            // Create div
            const divNode = document.createElement("div");
            divNode.id = data[i].name;
            divNode.className = "divHero";

            document.getElementById("heroes").appendChild(divNode);

            // Get and add img
            const imgNode = document.createElement("img");
            imgNode.src = data[i].images.card;
            imgNode.setAttribute("onclick", "loadHeroPage(this.parentNode.id)")
    
            document.getElementById(data[i].name).appendChild(imgNode);

            // Get and add Name
            const p = document.createElement("p");
            const nameNode = document.createTextNode(data[i].name);

            p.appendChild(nameNode);

            // Colour of hero
            p.style.backgroundColor = "rgb(" + data[i].color_ui[0] + ", " + data[i].color_ui[1] + ", " + data[i].color_ui[2] + ")";

            divNode.appendChild(p);
        }      
    }
}

  