function heroicInventoryic(array){
    let result=[];

    for (let hero of array) {
        let arrayOfHero = hero.split(' / ')
        let heroname = arrayOfHero[0];
        let heroLevel = Number(arrayOfHero[1]);
        let heroItem = [];
        if (arrayOfHero.length > 2){
           heroItem = arrayOfHero[2].split(', ');
        }

        let [name, level, items] = [
            heroname,
            heroLevel,
            heroItem,
        ]
        result.push({name, level, items});
    }   
console.log(JSON.stringify(result));
}
heroicInventoryic(['Jake / 1000 / Gauss, HolidayGrenade'])
heroicInventoryic(
    ['Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
    );
