function solve() {
  let buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', furniture)
  buttons[1].addEventListener('click', buy)

  let table = document.querySelector('.table tbody');

  function furniture(event){
    let array = JSON.parse(document.querySelector('textarea').value); 
    for (const item of array) {
      //create new TR in tbody with data from the object 
      let tr = document.createElement('tr');
      table.appendChild(tr);

      //can be done with FOREACH on object properties... or with another function
      let tdData=document.createElement('td');
      tdData.innerHTML='<img src="'+item.img+'"/>';
      tr.appendChild(tdData);

      tdData=document.createElement('td');
      tdData.textContent=item.name;            
      tr.appendChild(tdData);

      tdData=document.createElement('td');
      tdData.textContent=item.price;            
      tr.appendChild(tdData);

      tdData=document.createElement('td');
      tdData.textContent=item.decFactor;            
      tr.appendChild(tdData);

      tdData=document.createElement('td');
      tdData.innerHTML='<input type="checkbox" />';
      tr.appendChild(tdData);


  }
  }

  function buy(event){

  }
}