function townPopulation(townAsArray){
    const towns = {};

    for (let townAsString of townAsArray) {
        let [town,population] = townAsString.split(' <-> ');
        population  = Number(population);

        if(towns[town] != undefined){
            towns[town] += population;
        }else {
            towns[town] = population;
        }
    }

    for (let [name,population] of Object.entries(towns)) {
        console.log(`${name} : ${population}`);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)