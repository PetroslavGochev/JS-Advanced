function colorize() {
    let collection = document.getElementsByTagName('tr');

    Array.from(collection);

   for (let index = 1; index < collection.length; index+=2) {
       collection[index].style.backgroundColor = "Teal";     
   }
}