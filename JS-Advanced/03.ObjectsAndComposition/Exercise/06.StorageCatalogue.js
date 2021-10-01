function sortedProduct(array){
    let sorted = [];

    for (const product of array) {
        let productSplit = product.split(' : ');
        let nameOfProduct = productSplit[0];
        let priceOfProdcut = Number(productSplit[1]);

        let [name, price] = [
            nameOfProduct,
            priceOfProdcut,
        ];
        sorted.push({name,price});
    }
    sorted.sort((a, b) => (a.name > b.name) ? 1 : -1)

    let letter = sorted[0].name[0];
    console.log(`${letter}`);
    for (let index = 0; index < sorted.length; index++) {
        if(letter != sorted[index].name[0]){
            letter = sorted[index].name[0];
            console.log(`${letter}`);
        }
        console.log(`  ${sorted[index].name}: ${sorted[index].price}`);    
    }
}


sortedProduct(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);

sortedProduct(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);