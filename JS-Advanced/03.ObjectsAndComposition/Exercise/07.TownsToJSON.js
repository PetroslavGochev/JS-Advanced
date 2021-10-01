function townsToJson(array){
    let obj = [];

    for (let index = 0; index < array.length; index++) {
        let rowData = array[index].split(' | ');
        if(index > 0){
            let latitude = Number(rowData[1]).toFixed(2);
            let longtitude = Number(rowData[2].split(' |')[0]).toFixed(2);
            let [Town, Latitude , Longitude ] = [
                rowData[0].split('| ')[1],
                Number(latitude),
                Number(longtitude),
            ]
            obj.push({Town, Latitude, Longitude});     
        }
    }

    let result = JSON.stringify(obj);

    console.log(result);
    
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

townsToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);