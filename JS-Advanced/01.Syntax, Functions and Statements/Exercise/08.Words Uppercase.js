function wordsUppercase(word){
    let words = word.split(/[ ,]+/g);
    console.log((words.join(', ')).toUpperCase());
}

wordsUppercase('Hello, i am petroslsav');

function solve(input){
    let regexPattern = /\w+/g;
    let results = input.match(regexPattern);    

    console.log(
        results
        .map(x => x.toUpperCase())
        .join(', '));
}

solve('Hi, how are you?');
solve('hello');
solve('1');