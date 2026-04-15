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

module.exports = {isBargain, isClothing, isSurfboard, isGear}

