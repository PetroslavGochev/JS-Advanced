function sum(array){
    return Number(array.shift()) + Number(array.pop());
}

console.log(sum(['20', '30', '40']));