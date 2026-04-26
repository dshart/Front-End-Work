const database = {
    heroes : [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains : [
        {
            id: 1,
            name: "Smelly Breath Guy",
            power: "Maximum halitosis"
        },
        {
            id: 2,
            name: "Monday Morning Blah Man",
            power: "Makes enemies despair" 
        }
    ]
}

//returns deep copy of array
export const getHeroes = () => {
    return structuredClone(database.heroes);
}

export const getVillains = () => {
    return structuredClone(database.villains);
}