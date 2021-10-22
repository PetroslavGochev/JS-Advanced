function addItem() {
    let textValue = document.getElementById('newItemText').value;
    let valueValue = document.getElementById('newItemValue').value;

    let optionElement = document.createElement('option');
    optionElement.textContent = textValue + ' ' + valueValue;
    document.getElementById('menu').appendChild(optionElement)

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}