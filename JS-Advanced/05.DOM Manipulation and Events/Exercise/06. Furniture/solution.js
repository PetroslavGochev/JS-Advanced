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
    let products = Array.from(document.querySelectorAll('tr'));
    let bought = {
      name: [],
      totalSum: 0,
      decFactor: [],
      avgDecFactor: 0
    }
    for (let index = 1; index < products.length; index++) {
      let isChecked = products[index].querySelector('input').checked
      if(isChecked){
        let product = Array.from(products[index].querySelectorAll('td'));
          bought.name.push(product[1].innerText);
          bought.totalSum += Number(product[2].innerText);
          bought.decFactor.push(Number(product[3].innerText));
      }
    }
      bought.avgDecFactor = (bought.decFactor.reduce((a, b) => a + b, 0) / bought.decFactor.length);

      
      let result = `Bought furniture: ${bought.name.join(', ')}\nTotal price: ${bought.totalSum.toFixed(2)}\nAverage decoration factor: ${bought.avgDecFactor}`
      // result += `Total price: ${bought.totalSum.toFixed(2)}\n `;
      // result += `Average decoration factor: ${bought.avgDecFactor}`;
      document.querySelectorAll('textarea')[1].innerText = result;
  }
}
