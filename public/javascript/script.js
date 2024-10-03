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
            const node = document.createElement("img");
            node.src = data[i].images.card;
    
            document.getElementById("heroes").appendChild(node)  
        }      
    }
}

/*     data.forEach(hero =>
        document.getElementById("heroList").innerHTML); */

  