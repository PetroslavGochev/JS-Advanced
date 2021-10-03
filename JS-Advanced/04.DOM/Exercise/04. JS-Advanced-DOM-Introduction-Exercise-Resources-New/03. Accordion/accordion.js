function toggle() {
    let spanValue = document.getElementsByClassName('button')[0].innerText;
    let element = document.getElementById('extra');
    if (spanValue == 'MORE') {

        element.style.display = 'none';
        document.getElementsByClassName('button')[0].innerText = 'LESS';
    } else {
        element.style.display = 'block';
        document.getElementsByClassName('button')[0].innerText = 'MORE';
    }

}