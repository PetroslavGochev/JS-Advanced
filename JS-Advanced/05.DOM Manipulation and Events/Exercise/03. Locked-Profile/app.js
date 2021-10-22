function lockedProfile() {
    Array
    .from(document.getElementsByTagName('button'))
            .forEach(x => x.addEventListener('click',onClick));

    function onClick(event){
        let parent = event.target.parentNode;
        let checked = parent.querySelector('input:checked').value;
        if(checked == 'unlock'){
            let buttonValue = event.target.textContent;

            if(buttonValue == 'Show more'){
                parent.getElementsByTagName('div')[0].style.display = 'inline';
                event.target.textContent = 'Hide it';
            }
            else {
                parent.getElementsByTagName('div')[0].style.display = 'none';
                event.target.textContent = 'Show more';
            }
        }      
    }
}