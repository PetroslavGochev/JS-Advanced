function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField').value;

      let collection = document.querySelector('tbody').querySelectorAll('tr');

      Array.from(collection);
      let boolean = true;

      for (const tr of collection) {
         for (const td of tr.querySelectorAll('td')) {
            if(td.textContent.includes(search)){
              tr.setAttribute('class','select');
              boolean = false;
            }
            else if(boolean){
               if(tr.getAttribute('class') == 'select'){
                  tr.setAttribute('class','');
               }
            }
         }
         boolean = true;
      }
   }
}