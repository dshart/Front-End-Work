const rivers = [
  {
    id: 1,
    price: "$$$$",
    latitude: 57.6055534,
    longitude: 12.2028691,
    uniqueFish: "Hystrix indica",
    name: "Eleven Point National Scenic River",
    length: 22,
  },
  {
    id: 2,
    price: "$$$$$",
    latitude: -27.950568,
    longitude: -51.8148609,
    uniqueFish: "Libellula quadrimaculata",
    name: "Willamette River Water Trail",
    length: 73,
  },
  {
    id: 3,
    price: "$$$$",
    latitude: 58.5944316,
    longitude: 49.6634858,
    uniqueFish: "Ceratotherium simum",
    name: "Missouri National Recreational River Water Trail",
    length: 19,
  },
  {
    id: 4,
    price: "$$",
    latitude: 41.6409278,
    longitude: -8.5624704,
    uniqueFish: "Philetairus socius",
    name: "Kenai River",
    length: 15,
  },
  {
    id: 5,
    price: "$$$",
    latitude: 56.9191069,
    longitude: 60.4807823,
    uniqueFish: "Gopherus agassizii",
    name: "Huron River Water Trail",
    length: 32,
  },
  {
    id: 6,
    price: "$$$",
    latitude: 10.6934511,
    longitude: 122.4801854,
    uniqueFish: "Macropus fuliginosus",
    name: "Buffalo National River",
    length: 67,
  },
  {
    id: 7,
    price: "$",
    latitude: 21.2350622,
    longitude: -102.3342182,
    uniqueFish: "Centrocercus urophasianus",
    name: "Black Canyon Water Trail",
    length: 88,
  },
  {
    id: 8,
    price: "$$",
    latitude: 30.8861589,
    longitude: 104.2532768,
    uniqueFish: "Sceloporus magister",
    name: "Mulberry River",
    length: 52,
  },
  {
    id: 9,
    price: "$$$$",
    latitude: 7.9414261,
    longitude: 122.3862362,
    uniqueFish: "Numida meleagris",
    name: "Duck River",
    length: 78,
  },
  {
    id: 10,
    price: "$$$",
    latitude: 65.4026,
    longitude: 21.1886684,
    uniqueFish: "Pteropus rufus",
    name: "Northern Forest Canoe Trail",
    length: 74,
  },
  {
    id: 11,
    price: "$$$",
    latitude: 29.00707,
    longitude: 114.246016,
    uniqueFish: "Phalaropus lobatus",
    name: "Green River",
    length: 100,
  },
  {
    id: 12,
    price: "$$$$$",
    latitude: 60.0528555,
    longitude: 23.6314746,
    uniqueFish: "Alcelaphus buselaphus cokii",
    name: "Tuolumne River",
    length: 13,
  },
  {
    id: 13,
    price: "$",
    latitude: 58.3493356,
    longitude: 13.8300629,
    uniqueFish: "Catharacta skua",
    name: "Noatak River",
    length: 61,
  },
  {
    id: 14,
    price: "$",
    latitude: 35.2099034,
    longitude: 107.7918964,
    uniqueFish: "Spermophilus parryii",
    name: "Wabakimi Provincial Park",
    length: 90,
  },
  {
    id: 15,
    price: "$$",
    latitude: 24.965651,
    longitude: 102.591737,
    uniqueFish: "Oryx gazella callotis",
    name: "Nahanni River",
    length: 55,
  },
  {
    id: 16,
    price: "$$$",
    latitude: 34.810487,
    longitude: 117.323725,
    uniqueFish: "Zenaida asiatica",
    name: "Gauley River",
    length: 50,
  },
  {
    id: 17,
    price: "$$$",
    latitude: 53.5279314,
    longitude: -114.001928,
    uniqueFish: "Coluber constrictor",
    name: "San Juan River",
    length: 84,
  },
  {
    id: 18,
    price: "$",
    latitude: 43.1227567,
    longitude: 45.7420648,
    uniqueFish: "Upupa epops",
    name: "Devils River",
    length: 70,
  },
  {
    id: 19,
    price: "$",
    latitude: 14.972892,
    longitude: 8.8831506,
    uniqueFish: "Panthera leo",
    name: "Clearwater River Canoe Trail",
    length: 71,
  },
  {
    id: 20,
    price: "$$",
    latitude: 38.0625172,
    longitude: 23.7946578,
    uniqueFish: "Phalacrocorax albiventer",
    name: "Allagash Wilderness Waterway",
    length: 65,
  },
  {
    id: 21,
    price: "$",
    latitude: 9.8422682,
    longitude: 11.3885001,
    uniqueFish: "Phalacrocorax carbo",
    name: "John Day River",
    length: 46,
  },
  {
    id: 22,
    price: "$$",
    latitude: 47.2186081,
    longitude: 34.6661709,
    uniqueFish: "Ictonyx striatus",
    name: "Rio Grande",
    length: 77,
  },
  {
    id: 23,
    price: "$$$",
    latitude: 43.2625974,
    longitude: 23.6556259,
    uniqueFish: "Anhinga rufa",
    name: "Chattooga River",
    length: 46,
  },
  {
    id: 24,
    price: "$$$$",
    latitude: 33.9485698,
    longitude: 44.9159938,
    uniqueFish: "Theropithecus gelada",
    name: "Loxahatchee River",
    length: 77,
  },
  {
    id: 25,
    price: "$$",
    latitude: 50.480431,
    longitude: 121.682569,
    uniqueFish: "Phoenicopterus ruber",
    name: "Pecatonica River",
    length: 87,
  },
];

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
    (lowCostRiver) => lowCostRiver.price.length === 1
  );
  return lowCostRivers;
};

function mostExpensiveRivers(rivers) {
  let highCostRivers = rivers.filter(
    (highCostRiver) => highCostRiver.price.length >= 4,
  );
  return highCostRivers;
}

export {rivers, totalRiverMiles, shortestRiverMiles, longestRiverMiles, leastExpensiveRivers, mostExpensiveRivers};
