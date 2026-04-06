import { queensOfOld, tributeChest, hailTheQueen } from "./functions.js";
import { database } from "./data.js";

// Call the imported function
const queens = queensOfOld();
const tributes = tributeChest(database);

for (let tribute of tributes) {
   console.log(
     `My tribute to my queen has id of ${tribute.id}, is ${tribute.details} and goes to queen with id of ${tribute.queenId}`,
   );
 }

// iterate through queens array then for each queen do a search method on the treasures instead 
// looping through the tributes array
for (const queen of queens) {
    let tributeItem = tributes.find(tribute => tribute.queenId === queen.id);
    if (tributeItem !== undefined)
    { console.log(
          `Queen ${queen.name} has been given a tribute of ${tributeItem.details}`);
    }
    else 
      console.log(`Queen ${queen.name} has not tributes.`);
}

for (const queen of queens) {
  console.log(`Queen ${queen.id} is ${queen.name}`);
  const hailMessage = hailTheQueen(queen.name);
  console.log(hailMessage);
}


