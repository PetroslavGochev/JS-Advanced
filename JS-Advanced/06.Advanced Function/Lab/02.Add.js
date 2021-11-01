function solution(number){
    return (y) => y + number;
}

let add5 = solution(5);

console.log(add5(2));