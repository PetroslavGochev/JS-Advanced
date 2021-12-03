function argumentInfo(){
    let result = {};

    Array.from(arguments).forEach(element => {
        let typeOfElement = typeof element;
        console.log(`${typeOfElement}: ${element}`);
        if(!result[typeOfElement]){
            result[typeOfElement] = 0;
        }
        result[typeOfElement]++;
    });

    Object.keys(result).sort((a,b) => result[b] - result[a])
    .forEach(key => console.log(`${key} = ${result[key]}`));
}


argumentInfo('cat', 42, function () { console.log('Hello world!'); });