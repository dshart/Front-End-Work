import { database } from "./data.js";

const queensOfOld = () => {
  return database.queensData.map((queen, index) => ({
    id: index + 1,
    name: queen,
  }));
};

const tributeChest = (database) => { //only pass 1 argument in for entry plus index
  return database.tributesData.map((tribute, index) => ({
    id: index + 1,
    tributeItem: tribute.item, //then if argument is object can break up properties here
    queenId: tribute.queenId
  }))
};

const hailTheQueen = (nameString) => {
  return `Hail Her Majesty, ${nameString}.`;
};

export { queensOfOld, tributeChest, hailTheQueen };
