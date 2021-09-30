function carFactory(object){
    let result = {};
    const engine = {}
    const carriage = {}
    result.model = object.model;
    if(object.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }

    if (object.power > 90 && object.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    }

    if (object.power > 120){
        engine.power = 200;
        engine.volume = 3500;
    }

    carriage.type = object.carriage;
    carriage.color = object.color;

    result.engine = engine;
    result.carriage = carriage;

    if(object.wheelsize % 2 == 0 ){
        object.wheelsize--;
    }
    result.wheels = Array(4).fill(object.wheelsize);

     return result;
}

let result = carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
);

console.log(result);
