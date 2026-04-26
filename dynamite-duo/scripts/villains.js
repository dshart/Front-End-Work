import {getVillains} from "./database.js";

const villains = getVillains();

export const VillainList = () => {
    let villainHTML = "<ul>";

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`;
    }        
    
    villainHTML += "</ul>";
   
    return villainHTML;
}
