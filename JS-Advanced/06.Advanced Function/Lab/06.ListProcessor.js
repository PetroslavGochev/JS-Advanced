function solution(input){
    let processor = listProcessor();
    input.map((x) => x.split(' '))
         .map(([cmd,value]) => processor[cmd](value));


         function listProcessor(){
            let result = [];
            return {
                add: (value) => result.push(value),
                remove: (value) => result = result.filter((x) => x !== value),
                print: () => console.log(result.join(','))
            }
        }
}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);