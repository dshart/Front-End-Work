 const totalTrailMiles = (trails) => {
    let total = 0;
    for (const trail of trails) {
        total += trail.length;
    }

    return total.toFixed(1);
    };

    const shortestTrailMiles = (trails) => {
    let shortest = 10000;
    for (const trail of trails) {
        if (trail.length < shortest) {
        shortest = trail.length;
        }
    }

    return shortest;
    };

    const longestTrailMiles = (trails) => {
    let longest = 0;
    for (const trail of trails) {
        if (trail.length > longest) {
        longest = trail.length;
        }
    }

    return longest;
    };

    const leastExpensiveTrails = (trails) =>  {
    let lowCostTrails = trails.filter(
        lowCostTrail => lowCostTrail.price.length === 1
    );
    return lowCostTrails;
    };

    function mostExpensiveTrails(trails) {
    let highCostTrails = trails.filter(
        highCostTrail => highCostTrail.price.length >= 4
    );
    return highCostTrails;
  }

  module.exports = {
    totalTrailMiles,
    shortestTrailMiles,
    longestTrailMiles,
    leastExpensiveTrails,
    mostExpensiveTrails
  };
