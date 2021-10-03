function solve() {
  let text = document.getElementById('text').value;
  let result = '';
  let convention = document.getElementById('naming-convention').value;

  if (convention == 'Camel Case') {

    for (let index = 0; index < text.length; index++) {
      if (text[index] == ' ') {
        result += (text[index + 1].toUpperCase());
        index++;
      } else {
        result += text[index].toLowerCase();
      }
    }

  }
  else if (convention == 'Pascal Case') {

    result += text[0].toUpperCase();
    for (let index = 1; index < text.length; index++) {
      if (text[index] == ' ') {
        result += text[index + 1].toUpperCase();
        index++;
      } else {
        result += text[index].toLowerCase();
      }
    }
  }
  else {
    result = 'Error!';
  }

  document.getElementById('result').textContent = result;
}