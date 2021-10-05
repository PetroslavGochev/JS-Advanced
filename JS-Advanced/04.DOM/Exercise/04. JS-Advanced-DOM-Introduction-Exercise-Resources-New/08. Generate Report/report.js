function generateReport() {
    let collection = document.querySelectorAll("input[type='checkbox']");
    let checkedHeaders = {};

    let result = [];

    Array.from(collection);
    for (let index = 0; index < collection.length; index++) {
        if (collection[index].checked) {
            checkedHeaders[index] = collection[index].name;
        }
    }

    let column = document.querySelectorAll('tr');
    Array.from(column);

    for (let index = 1; index < column.length; index++) {
        let columnData = column[index].getElementsByTagName('td');
        let obj = {};
        for (let x = 0; x < columnData.length; x++) {
            if(checkedHeaders[x]){
                let propertyName = checkedHeaders[x];
                let value = columnData[x].textContent;         
                obj[propertyName] = value;             
            }        
        }
        result.push(obj);
    }
    document.getElementById('output').textContent = JSON.stringify(result);
}