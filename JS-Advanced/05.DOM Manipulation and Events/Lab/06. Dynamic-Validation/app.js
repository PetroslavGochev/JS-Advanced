function validate() {
    let regex = /[a-z]+@[a-z]+.[a-z]+/;

    let email = document.getElementById('email');

    email.addEventListener('change', (ev) => {
        let value = ev.target.value;

        if(value.match(regex) == null){
            email.classList.add('error');
        }
        else {
            email.classList = '';
        }
    });
}