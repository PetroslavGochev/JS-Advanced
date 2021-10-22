function encodeAndDecodeMessages() {
    Array.from(document.querySelectorAll('button'))
    .forEach(x => 
        x.textContent == 'Encode and send it' ? x.addEventListener('click', encode) :
        x.textContent == 'Decode and read it' ? x.addEventListener('click', decode) : '')
    
    function decode(event){
        let text = document.getElementsByTagName('textarea')[1].value;
        let result = '';
        for (let index = 0; index < text.length; index++) {
            result += String.fromCharCode(text.charCodeAt(index) - 1);
        }
        document.getElementsByTagName('textarea')[1].value = result;
    }
    function encode(event){
        let text = document.getElementsByTagName('textarea')[0].value;
        let result = '';
        for (let index = 0; index < text.length; index++) {
            result += String.fromCharCode(text.charCodeAt(index) + 1);
        }
        document.getElementsByTagName('textarea')[0].value = '';
        document.getElementsByTagName('textarea')[1].value = result;
    }

}