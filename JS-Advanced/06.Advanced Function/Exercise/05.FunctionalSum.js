function add(a){
    function sum(b){
        a+=b;
        return sum;
    }
    let value = a;
    return value;
}
let test = add(1);
test(6);
test(-3);
console.log(test);
console.log(add(1)(6)(-3))