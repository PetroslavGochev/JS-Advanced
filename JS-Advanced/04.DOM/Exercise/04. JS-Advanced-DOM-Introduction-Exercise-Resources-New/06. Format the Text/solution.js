function solve() {
  let text = document.getElementById('input').value;
  let div = document.getElementById('output');
  let collection = text.split('.').filter((p) => p.length > 0);;

  div.innerHTML = '';

  while(collection.length != 0){
    let tag = document.createElement('p');
    let result = '';
    for (let index = 0; index < 3; index++) {
      result += collection.shift();
    }
    result += '.';
    tag.appendChild(document.createTextNode(result));
    div.appendChild(tag)
  }
}
// function solve() {
//   let inputStr = document.getElementById('input').value;
//   let output = document.getElementById('output');

//   let input = inputStr.split('.').filter((p) => p.length > 0);

//   for (let i = 0; i < input.length; i += 3) {
//       let arr = [];
//       for (let y = 0; y < 3; y++) {
//           if (input[i + y]) {
//               arr.push(input[i + y]);
//           }
//       }
//       let paragraph = arr.join('. ') + '.';
//       output.innerHTML += `<p>${paragraph}</p>`;
//   }
// }