
export const convertDataForAccounting = (inventory) => {
  let upperDescription = "";
  let upperPrice = 0;
  let upperType = "";
  let allUpperCase = "";

  for (const product of inventory) {
    upperDescription = product.description.toUpperCase();
    upperPrice = product.price;
    upperType = product.type.toUpperCase();
    allUpperCase += `  ${upperDescription} - ${upperType} - ${upperPrice}
`;
  }

  return allUpperCase;
};


