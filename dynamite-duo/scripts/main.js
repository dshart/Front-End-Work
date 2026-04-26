const mainElement = document.querySelector("#container");

//Import the function references that generate the HTML lists
import {HeroList} from "./heroes.js";
import {VillainList} from "./villains.js";

//Grab the return values of the HTML list generator
const heroListHTML = HeroList();
const villainListHTML = VillainList();

//Build the string
const heroesAndVillainsHTML = `
    <h2>Heroes</h2>
    ${heroListHTML}

    <h2>Villains</h2>
    ${villainListHTML}
`    

//Overwrite existing HTML at this location
mainElement.innerHTML = heroesAndVillainsHTML;