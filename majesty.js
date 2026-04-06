import { queensOfOld, tributeChest, hailTheQueen } from "./functions.js";
import { tributesData } from "./data.js";


// Call the imported function
const queens = queensOfOld();
const tributes = tributeChest(tributesData);

for (let tribute of tributes) {
   console.log(
     `My tribute to my queen has id of ${tribute.id}, is ${tribute.tributeItem} and goes to queen with id of ${tribute.queenId}`,
   );
 }

// //iterate through queens array then for each queen iterate through treasure chest to see if any tributes
 for (const queen of queens) {
  for (const tribute of tributes) {
     if (tribute.queenId === queen.id) {
       console.log(
         `Queen ${queen.name} has been given a tribute of ${tribute.tributeItem}`,
     );
    }
   }
 }

for (const queen of queens) {
  console.log(`Queen ${queen.id} is ${queen.name}`);
  const hailMessage = hailTheQueen(queen.name);
  console.log(hailMessage);
}


