function comparea(array) {
    array.sort(function (a, b){

        if (a.length > b.length) {
            return 1;
        }
        if (a.length < b.length) {
            return -1;
        }

        return a.localeCompare(b);
    })
    console.log(array.join('\r\n'));
}

comparea(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);

