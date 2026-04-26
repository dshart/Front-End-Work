const {
  trails, 
  totalTrailMiles, 
  shortestTrailMiles, 
  longestTrailMiles, 
  leastExpensiveTrails, 
  mostExpensiveTrails
} = require("./trails.js")
  
const {
  rivers,
  totalRiverMiles,
  shortestRiverMiles,
  longestRiverMiles,
  leastExpensiveRivers,
  mostExpensiveRivers
} = require("./rivers.js")


console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`);

console.log("***************************************************");
console.log("*****              T R A I L S                *****");
console.log("***************************************************");

console.log(`
TRAIL DETAILS:`);

//Call Functions and use return values *****************************************************
const trailTotal = totalTrailMiles(trails);
console.log(
  `We service ${trailTotal} miles of wilderness trails across the US`,
);

const shortestTrail = shortestTrailMiles(trails);
console.log(`The shortest trail is ${shortestTrail} kilometers`);

const longestTrail = longestTrailMiles(trails);
console.log(`The longest trail is ${longestTrail} kilometers`);

const cheapestTrails = leastExpensiveTrails(trails);
console.log("\nThe Least Expensive Trail Tours Are");
for (const tour of cheapestTrails) {
  console.log(`    ${tour.name}`)};

const priciestTrails = mostExpensiveTrails(trails);
console.log("The Most Expensive Trail Tours Are");
for (const tour of priciestTrails) {
  console.log(`    ${tour.name}`)};

for (const trail of trails) {
  console.log(`
${trail.name}'s Route starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length} kilometers long.
The highlighted plant for the trip is the ${trail.plantHighlight}.`);
}

console.log(`
***************************************************`);
console.log("*****              R I V E R S                *****");
console.log("***************************************************");

const riverTotal = totalRiverMiles(rivers);
console.log(
`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`,
);

const shortestRiver = shortestRiverMiles(rivers);
console.log(`The shortest river tour is ${shortestRiver} kilometers`);

const longestRiver = longestRiverMiles(rivers);
console.log(`The longest river tour is ${longestRiver} kilometers`);

const cheapestRivers = leastExpensiveRivers(rivers);
console.log("\nThe Least Expensive River Tours Are");
for (const river of cheapestRivers) {
  console.log(`    ${river.name}`);
}

const priciestRivers = mostExpensiveRivers(rivers);
console.log("The Most Expensive River Tours Are");
for (const river of priciestRivers) {
  console.log(`    ${river.name}`);
}  

console.log(`
RIVER DETAILS:`);
for (const river of rivers) {
    console.log(`${river.name}'s starts at [${river.latitude}, ${river.longitude}] and is ${river.length} kilometers long.
The unique fish for the trip is the ${river.uniqueFish}.
`)};



//for reference can be used with either trail or river
//consolidated for any tour type as long as $ amount is same
// function mostExpensiveTours(tourType) {
//   let highCostTour = tourType.filter(
//     x => x.price.length >= 4
// );
// return highCostTour;
// }
