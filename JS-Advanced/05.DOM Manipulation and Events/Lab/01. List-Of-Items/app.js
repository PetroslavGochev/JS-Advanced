function addItem() {
    let newItemText = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = newItemText;

    document.getElementById('items').appendChild(li);
}