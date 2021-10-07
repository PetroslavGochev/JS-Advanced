function focused() {
    let inputs = document.querySelectorAll('input');

    for (const input of inputs) {
        
    input.addEventListener('focus', (ev) => {
        let parent = input.parentNode;
        parent.classList.add('focused');
     });
 
     input.addEventListener('blur', (ev) => {
         let parent = input.parentNode;
         parent.classList = '';
     });
    }
}