function validate() {
    let text = document.getElementById('email');
    text.addEventListener('change', onChangeEvent)

    function onChangeEvent(event){
        const regex = new RegExp('[a-z]+@[a-z]+\.[a-z]+');
        let value = event.target.value;
        if(!regex.test(value)){
            event.target.classList.add('error');
        }else {
            event.target.classList.remove('error');
        }   
    }
}