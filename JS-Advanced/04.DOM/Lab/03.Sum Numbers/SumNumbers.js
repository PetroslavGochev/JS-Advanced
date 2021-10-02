function calc() {
    let collection = document.querySelectorAll('input');
    let firstNumber = Number(collection[0].value);
    let secondNumber = Number(collection[1].value);

    collection[2].value = firstNumber + secondNumber;
}
