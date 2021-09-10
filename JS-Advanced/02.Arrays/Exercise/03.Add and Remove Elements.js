function addAndRemove(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] == 'add') {
            newArray.push(index + 1);
        }
        else {
            newArray.pop();
        }
    }
    if(newArray.length != 0){
        for (const value of newArray) {
            console.log(value);
        }
    }
    else {
        console.log("Empty");
    }
}

addAndRemove(
    ['add',
        'add',
        'remove',
        'add',
        'add']
);
