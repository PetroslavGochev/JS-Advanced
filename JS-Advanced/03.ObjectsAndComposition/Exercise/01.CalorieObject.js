function caloriesObject(array){
    let object = {};

    for (let index = 0; index < array.length; index+=2) {
            let name = array[index];
            let calories = Number(array[index + 1]);
            object[name] = calories; 
    }
    console.log(object);
}

caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
