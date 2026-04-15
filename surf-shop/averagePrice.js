 export const calculateAveragePrice = (products) => {
   let total = 0;
   for (const product of products) {
     total += product.price;
   }
   
   const averagePrice = total / products.length;
   return averagePrice;
 };

