function sumTable() {
    let collection = document.getElementsByTagName('td');

    Array.from(collection);
    let result = 0;
    for (let index = 1; index < collection.length; index+=2) {
        let number = Number(collection[index].textContent);
        result += number;
    }

    let resultColumn = document.getElementById('sum');

    resultColumn.textContent = result; 
}