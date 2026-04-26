 const totalTrailMiles = (trails) => {
    let total = 0;
    trails.filter(trail => total += trail.length)
    return total.toFixed(1);
  };

  const shortestTrailMiles = (trails) => {
      let shortest = Number.MAX_VALUE;
      trails.filter(trail => shortest = Math.min(trail.length, shortest));
      return shortest;  
  };  
    
  const longestTrailMiles = (trails) => {
    let longest = Number.MIN_VALUE;
    trails.filter(trail => longest = Math.max(trail.length, longest));
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

  export default {
    totalTrailMiles,
    shortestTrailMiles,
    longestTrailMiles,
    leastExpensiveTrails,
    mostExpensiveTrails
  };
