function deleteByEmail() {
    let email = document.querySelector("input[name='email']").value;
    let result = document.getElementById('result');
    let isDeleted = false;

        Array.from(document.querySelectorAll('tbody tr')).forEach(x => {
            let currentEmail = x.querySelectorAll('td');
            if (currentEmail[1].textContent == email) {
                x.remove();
                result.textContent = 'Deleted.';
                isDeleted = true;
            }
        });
    if(!isDeleted){
        result.textContent = 'Not found.';
    }
}