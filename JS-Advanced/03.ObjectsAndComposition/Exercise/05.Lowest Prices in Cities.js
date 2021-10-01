function lowestPriceInCities(array){
    let result = {};

    for (const iterator of array) {
        let row = iterator.split(' | ');
        let product = row[1];
        let town = row[0];
        let price = Number(row[2]);

        if(result[product]){
            if (result[product].price > price){
                result[product].town = town;
            }
            if (result[product].town == town){
                result[product].price = price;
            }
        }
        else {
            result[product] = {};
            result[product].price  = price;
            result[product].town = town;
        }
    }
    
   for (const iterator in result) {
       console.log(`${iterator} -> ${result[iterator].price} (${result[iterator].town})`);
   }
}


lowestPriceInCities(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']
);
console.log('==================');
lowestPriceInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);