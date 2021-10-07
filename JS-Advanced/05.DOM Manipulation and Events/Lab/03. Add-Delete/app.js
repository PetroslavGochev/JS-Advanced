function addItem() {
    document.getElementById('items').addEventListener('click', (ev) => { 
        if(ev.target.tagName === 'A'){
            ev.target.parentNode.remove();
        }
    });
    
    let newItemText = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = newItemText;
    
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent =  '[Delete]';
    deleteBtn.href = '#';

    li.appendChild(deleteBtn);

    document.getElementById('items').appendChild(li);
}
