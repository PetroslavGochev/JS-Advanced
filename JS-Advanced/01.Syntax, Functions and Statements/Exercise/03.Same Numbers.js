function sameNumbers(numbers){
    let convertNumber = numbers.toString();
    let number = convertNumber[0];
    let check = true;
    let sum = 0;
    for(let i = 0; i < convertNumber.length; i++){
        let currentNumber = parseInt(convertNumber[i]);
        if (number!= currentNumber){
            check = false;
        } 
        sum += currentNumber;
    }
    console.log(check);
    console.log(sum);
}

sameNumbers(2221);