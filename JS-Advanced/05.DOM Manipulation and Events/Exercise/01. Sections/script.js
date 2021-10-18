function create(words) {
   let div;
   let paragraph;

   for (let index = 0; index < words.length; index++) {
      div = document.createElement('div');
       
      paragraph = document.createElement('p');
      paragraph.innerHTML = words[index];
      paragraph.style.display = 'none';
      div.appendChild(paragraph);
      document.getElementById('content').appendChild(div);

      div.addEventListener('click',onClick);
   }

   function onClick(event){
      event.target.getElementsByTagName('p')[0].style.display = '';
   }
}