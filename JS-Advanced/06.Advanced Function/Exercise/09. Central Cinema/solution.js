function solve() {

    const onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreenHandler);

    function onScreenHandler(event) {
        event.preventDefault();
        const [name, hall, price] = Array.from(document.querySelectorAll("#container input"));
        let nameInput = name.value.toString().length > 0 ? name.value : undefined;
        let hallInput = hall.value.toString().length > 0 ? hall.value : undefined;
        let priceInput = typeof (Number(price.value)) === 'number' ? Number(price.value) : undefined;

        if (nameInput && hallInput && priceInput && priceInput > 0) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = nameInput;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hallInput}`;

            let div = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = priceInput.toFixed(2);
            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Ticket sold');
            let archiveButton = document.createElement('button')
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveHandler);

            div.appendChild(priceStrong);
            div.appendChild(ticketsSoldInput);
            div.appendChild(archiveButton);

            li.appendChild(span);
            li.appendChild(hallStrong);
            li.appendChild(div);

            let ul = document.querySelector('#movies ul');

            ul.appendChild(li);

            document.querySelectorAll('#container input')[0].value = '';
            document.querySelectorAll('#container input')[1].value = '';
            document.querySelectorAll('#container input')[2].value = '';
        }
    }

    
    function archiveHandler(event) {
        let movieDiv = event.target.parentElement;
        let ticketsCountInput = movieDiv.querySelector('input');
        let ticketsCount = ticketsCountInput.value;
        let ticketPriceInput = movieDiv.querySelector('strong')
        let ticketPrice = Number(ticketPriceInput.textContent);

        if (ticketsCount.trim() !== '' &&  Number(ticketsCount) >= 0) {

            let ul = document.querySelector('#archive ul')
            let totalProfit = 0;
                
            if (ticketsCount > 0) {
                totalProfit = Number(ticketsCount) * ticketPrice;
            }
        
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = event.target.parentElement.parentElement.firstChild.textContent;
            let strong = document.createElement('strong');
            strong.textContent = `Total amount: ${totalProfit.toFixed(2)}`;
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', movieDeleteHandler);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(deleteButton);

            ul.appendChild(li);

            let movieLi = movieDiv.parentElement;
            movieLi.remove();
        }
    }

    function movieDeleteHandler(event){
        let singleMovieToDelete = event.target.parentElement;
        singleMovieToDelete.remove();
    }


    let clearButton = document.querySelector('#archive button');
    clearButton.addEventListener('click', clearHandler)

    function clearHandler(){
        let moviesToDelete = document.querySelectorAll('#archive ul li')
        for (const movie of moviesToDelete) {
            movie.remove();
        }
    }
}