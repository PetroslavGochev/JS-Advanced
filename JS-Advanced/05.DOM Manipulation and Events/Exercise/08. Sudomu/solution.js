function solve() {
    let buttons = document.querySelectorAll('button');
    buttons[1].addEventListener('click', clearAll);
    buttons[0].addEventListener('click', check);

    

    function clearAll(){
        let td = Array.from(document.querySelectorAll('td'));
        for (let index = 1; index < td.length; index++) {
            td[index].innerText = '';
        }
    }
}