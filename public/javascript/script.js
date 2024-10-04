const url = "localhost:3000";

fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        outputData(data)
    });

// Crate images
function outputData(data){
    for(var i = 0; i < data.length; i++){
        console.log(data[i].name);
        
        if(data[i].player_selectable == true && data[i].in_development == false && data[i].disabled == false){
            const divNode = document.createElement("div");
            divNode.id = "divHero" + i;
            divNode.className = "divHero";

            document.getElementById("heroes").appendChild(divNode);

            const imgNode = document.createElement("img");
            imgNode.src = data[i].images.card;
    
            document.getElementById("divHero" + i).appendChild(imgNode);  
        }      
    }
}
  