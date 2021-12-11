function printDeckOfCards(cards){
let result = [];
try {
cards.map(x => {
    let data = x.split('');
    let color;
    let card;
    if(data.length == 3){
        color = data[2];
        card = data[0] + data[1];
    }else {
        card = data[0];
        color = data[1];
    }
    try {
        result.push(returnCard(card,color));
    } catch (error) {
        throw new Error(`Invalid card: ${x}`);
    }
});
console.log(result.join(' '));
} catch (error) {
    console.log(error.message);
}


function returnCard(card, color){
    let validCards = {
        suits: {
                S: '\u2660',
                H: '\u2665',
                D: '\u2666',
                C: '\u2663'
                },
        face: ['2','3','4','5','6','7','8','9','10','J','K','Q','A'], 
        toString() {
            return `${card}${this.suits[color]}`;
        }
    }
    
    if(!validCards.face.includes(card) || !validCards.suits[color]){
        throw Error('Error');
    }else {
        return validCards.toString();
    }}
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);