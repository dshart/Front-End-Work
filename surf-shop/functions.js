const isBargain = (inventoryItem) => {
  let returnValue = false;

  if (inventoryItem.price < 50.0) {
    returnValue = true;
  }

  return returnValue;
};

const isClothing = (item) => {
  let returnValue = false;

  if (item.type === "clothing") {
    returnValue = true;
  }

  return returnValue;
};

const isSurfboard = (item) => {
  let returnValue = false;

  if (item.type === "surfboard") {
    returnValue = true;
  }

  return returnValue;
};

const isGear = (gear) => {
  let returnValue = false;

  if (gear.type === "gear") {
    returnValue = true;
  }

  return returnValue;
};

const convertDataForAccounting = (product) => {
  const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`;
  return allUpperCase;
};

// const calculateAveragePrice = (products) => {
//   let total = 0;
//   for (const product of products) {
//     total += product.price;
//   }
//   //const allPrices = products.price
//   const averagePrice = total / products.length;
//   return averagePrice;
// };

const calculateAveragePrice = (products) => {
  const allPrices = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0,
  );
  const averagePrice = allPrices / products.length;

  return averagePrice;
};

module.exports = {
  isBargain,
  isClothing,
  isGear,
  isSurfboard,
  convertDataForAccounting,
  calculateAveragePrice,
};
