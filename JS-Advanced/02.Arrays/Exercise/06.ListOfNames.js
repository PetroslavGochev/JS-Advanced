function listOfNames(array){
     array.sort((a,b) => a.localeCompare(b));

     for (let index = 0; index < array.length; index++) {
         console.log(`${index+1}.${array[index]}`);       
     }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);

