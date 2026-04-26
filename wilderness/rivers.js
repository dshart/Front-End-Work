const totalRiverMiles = (rivers) => {
  let total = 0;
  for (const river of rivers) {
    total += river.length;
  }

  return total.toFixed(1);
};

const shortestRiverMiles = (rivers) => {
  let shortest = 10000;
  for (const river of rivers) {
    if (river.length < shortest) {
      shortest = river.length;
    }
  }

  return shortest;
};

const longestRiverMiles = (rivers) => {
  let longest = 0;
  for (const river of rivers) {
    if (river.length > longest) {
      longest = river.length;
    }
  }

  return longest;
};

const leastExpensiveRivers = (rivers) => {
  let lowCostRivers = rivers.filter(
    (lowCostRiver) => lowCostRiver.price.length === 1,
  );
  return lowCostRivers;
};

function mostExpensiveRivers(rivers) {
  let highCostRivers = rivers.filter(
    (highCostRiver) => highCostRiver.price.length >= 4,
  );
  return highCostRivers;
}

module.exports = {
  totalRiverMiles,
  shortestRiverMiles,
  longestRiverMiles,
  leastExpensiveRivers,
  mostExpensiveRivers
};
