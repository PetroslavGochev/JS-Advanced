function solve() {
   let bag = {};
   let totalSum = 0;
   let textarea = document.getElementsByTagName('textarea')[0];

   Array.from(document.querySelectorAll('button')).forEach(btn => {
      btn.addEventListener('click', (ev) => {
         if (ev.target.className == 'add-product'){           
            addProductToBag(btn.parentNode.parentNode);
         }
         else if (ev.target.className == 'checkout'){
            checkoutResult(btn.parentNode.parentNode)
         }
      })
   });

   function addProductToBag(parent) {
      let nameOfProduct = parent.getElementsByClassName('product-title')[0].textContent;
      let price = Number(parent.getElementsByClassName('product-line-price')[0].textContent);
      bag[nameOfProduct] = Number(price);

      textarea.value += `Added ${nameOfProduct} for ${price.toFixed(2)} to the cart.\n`;
      totalSum += price;
   }

   function checkoutResult(parent){
      Array.from(document.querySelectorAll('button')).forEach(btn => {
         btn.disabled = 'true';
      });
      textarea.value += `You bought ${Object.keys(bag).join(', ')} for ${totalSum.toFixed(2)}.`;
   }
}