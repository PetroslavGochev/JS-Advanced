function sortedArray(data, sortExpression) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    function split(line) {
        return line.split('|');
    }
    function createTicket([destination, price, status]) {
        return new Ticket(destination, Number(price), status);
    }
    const sorted = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price - b.price,
        'status': (a, b) => a.status.localeCompare(b.status)
    }

    return data.map(split).map(createTicket).sort(sorted[sortExpression]);
}


sortedArray(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')


