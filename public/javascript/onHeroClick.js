
function loadHeroPage(parentNodeID){
    console.log(parentNodeID);

    localStorage.setItem("clickedHero", parentNodeID);

    window.open("hero.html", "_blank");
}