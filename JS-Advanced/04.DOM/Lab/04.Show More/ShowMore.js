function showText() {
    let textArea  = document.getElementById('text').textContent;
    let result = ` ${textArea} ${textArea}` ;

    textArea.value += result;

    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display='none';
}