const url = "localhost:3000";

fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(data => {
        console.log(data)

        outputData(data)
    });

function outputData(data){
    data.forEach(hero =>
        document.getElementById("heroList").innerHTML;
    )
}

  