function solution(input){
    const cars = () => {
        const car = {};
        return {
            create: (name, inherit, parent) => {
                car[name] = inherit ? Object.create(car[parent]) : {};
            },
            set: (name, key, value) => {
                car[name][key] = value;
            },
            print: (name) => {
                let result = [];
                for (const key in car[name]) {
                    result.push(`${key}:${car[name][key]}`);
                }
                console.log(result.join(', '));
            }
        }
    }

    const createCar = cars();

    input.map((element) => element.split(' ')).forEach(([cmd,...args]) => {
        createCar[cmd].apply(null,args);
    });
}


solution(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);