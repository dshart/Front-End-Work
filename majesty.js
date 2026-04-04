/* 
    Define a function with a single parameter.  When the function
    is invoked, an argument is required.
*/
const queens = [];
const createQueen = (queenId, queenName) => {
  const queenObject = {
    id: queenId,
    name: queenName,
  };
  queens.push(queenObject);
};

/*
  tribute object must have
  1.  unique numerical id property
  2.  description property to store string description of your tribute
  3.  queenId property to store the unique numerical identifier of a specific queen
*/
const tributeChest = [];
const payTribute = (id, description, queenId) => {
  const tribute = {
    id: id,
    description: description,
    queenId: queenId,
  };

  tributeChest.push(tribute);
};

createQueen(1, "Trinity Terry");
createQueen(2, "Nancy Lapute");
createQueen(3, "Darlene Dootyhead");
createQueen(4, "Monica Seles");
createQueen(5, "Tina Turner");

payTribute(1, "Bag of donuts", 22);
payTribute(2, "shark teeth", 4);
payTribute(3, "1 dollar cash money", 85);
payTribute(4, "89 tennis balls", 4);
payTribute(5, "Brass Monkey that Funky Monkey", 5);

// for (tribute of tributeChest) {
//   console.log(
//     `My tribute to my queen has id of ${tribute.tributeId}, is ${tribute.tributeDesc} and goes to queen with id of ${tribute.tributeQueenId}`,
//   );
//}
//iterate through queens array then for each queen iterate through treasure chest to see if any tributes
for (const queen of queens) {
  for (const tribute of tributeChest) {
    if (tribute.queenId === queen.id) {
      console.log(
        `Queen ${queen.name} has been given a tribute of ${tribute.description}`,
      );
    }
  }
}

// const hailTheQueen = (nameString) => {
//   return `Hail Her Majesty, ${nameString}.`;
// };

// const queens = [];

// createQueen(1, "Trinity Terry");
// createQueen(2, "Nancy Lapute");
// createQueen(3, "Darlene Dootyhead");

// console.log(queens.length);

// for (const queen of queens) {
//   console.log(`Queen ${queen.id} is ${queen.name}`);
//   const hailMessage = hailTheQueen(queen.name);
//   console.log(hailMessage);
// }

// const athena = hailTheQueen("Athena Perez");
// console.log(athena);

// const charisse = hailTheQueen("Charisse Ford");
// console.log(charisse);

// const jenna = hailTheQueen("Jenna Solis");
// console.log(jenna);

// const ramona = hailTheQueen();
// console.log(ramona);

// const monica = hailTheQueen("Monica Dinglehopper");
// console.log(monica);
