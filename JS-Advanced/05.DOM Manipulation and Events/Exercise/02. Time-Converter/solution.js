function attachEventsListeners() {

    let collection = document.querySelectorAll('div');

    for (const element of Array.from(collection)) {
        let button = element.children[2];
        let idOfButton = button.id;

        if(idOfButton == 'daysBtn'){
            button.addEventListener('click', onClickDays)
        }

        if(idOfButton == 'hoursBtn'){
            button.addEventListener('click', onClickHours)
        }

        if(idOfButton == 'secondsBtn'){
            button.addEventListener('click', onClickSeconds)
        }

        if(idOfButton == 'minutesBtn'){
            button.addEventListener('click', onClickMinutes)
        }
        
    }


    function onClickDays(event){

        let days = Number(document.getElementById('days').value);

        document.getElementById('hours').value = days * 24;
        document.getElementById('minutes').value = days * 24 * 60;
        document.getElementById('seconds').value = days * 24 * 60 * 60;
    }

    function onClickHours(event){
        let hours = Number(document.getElementById('hours').value);

        document.getElementById('days').value = hours / 24;
        document.getElementById('minutes').value = hours * 60;
        document.getElementById('seconds').value = hours * 60 * 60;
    }

    function onClickMinutes(event){
        let minutes = Number(document.getElementById('minutes').value);

        document.getElementById('days').value = minutes / 60 / 24;
        document.getElementById('hours').value = minutes / 60;
        document.getElementById('seconds').value = minutes * 60;
    }

    function onClickSeconds(event){
        let seconds = Number(document.getElementById('seconds').value);

        document.getElementById('days').value = seconds / 60 / 60 / 24 ;
        document.getElementById('hours').value = seconds/ 60 / 60;
        document.getElementById('minutes').value = seconds / 60;
    }
}