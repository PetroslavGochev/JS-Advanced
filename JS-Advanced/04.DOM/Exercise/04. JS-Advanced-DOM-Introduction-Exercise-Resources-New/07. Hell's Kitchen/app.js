function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textArea = document.getElementById('inputs').getElementsByTagName('textarea')[0].value;

      let collection  = textArea.split('\n');
   }
}