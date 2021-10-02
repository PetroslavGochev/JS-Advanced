function extractText() {
    let result = document.querySelectorAll('li');
    Array.from(result);
    let elementText = '';
    for (let obj of result) {
        elementText += obj.textContent;
        elementText += "\n";
    }
    let textArea = document.getElementById('result');
    textArea.value = elementText;
}
