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
    }
}

console.log(returnCard('A', 'S'));
console.log(returnCard('10', 'H'));
console.log(returnCard('1', 'C'));