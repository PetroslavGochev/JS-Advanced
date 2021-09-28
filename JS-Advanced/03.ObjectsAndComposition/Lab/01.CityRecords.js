function cityRecords(city, population, treasury){
    const records = {
        name: city,
        population: population,
        treasury: treasury,
    };
    return records;
}

console.log(cityRecords('Tortuga',
7000,
15000
));