import { getInventory} from './data.js';
import { convertDataForAccounting} from './accounting.js';
import { calculateAveragePrice} from './averagePrice.js';
import { isBargain, isSurfboard, isClothing, isGear} from './productReport.js';

const sequinasInventory = getInventory();

console.log("ACCOUNTING DATA:")
console.log(convertDataForAccounting(sequinasInventory)); 

console.log("AVERAGE PRICE:");
let avgPrice = calculateAveragePrice(sequinasInventory) 
console.log(`  The average price of all items in inventory is $${avgPrice}
`);

console.log("DETAILED REPORT");
for (let surfProduct of sequinasInventory) {
  let message = "";

  if (isClothing(surfProduct)) {
    message = `${surfProduct.description} is a clothing product`;
  }

  if (isGear(surfProduct)) {
    message = `${surfProduct.description} is a surfing gear product`;
  }

  if (isSurfboard(surfProduct)) {
    message = `${surfProduct.description} is a surfboard`;
  }

  if (isBargain(surfProduct)) {
    message = `${surfProduct.description} is currently on sale`;
  }

  if (message !== "") {
    console.log(`  ${message}`);
  }
}

