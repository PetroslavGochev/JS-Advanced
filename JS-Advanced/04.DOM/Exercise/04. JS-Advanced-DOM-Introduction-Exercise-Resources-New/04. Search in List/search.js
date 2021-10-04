function search() {
   let search = document.getElementById('searchText').value;
   let matches = 0;
   let collection = document.querySelectorAll('li');


   Array.from(collection);

   for (const li of collection) {
      if(li.innerHTML.includes(search)){
         matches++;
         li.style.fontWeight = 'bolder';
         li.style.textDecoration = 'underline';
      }else {
         if(li.style.fontWeight == 'bolder'){
            li.style.fontWeight = 'normal';
            li.style.textDecoration = 'none';
         }
      }      
   }
   document.getElementById('result').textContent = `${matches} matches found`;
}
