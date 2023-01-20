// Code your solutions in this file

const cards = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
        return cards;
}

function countDown(down) {
    while (down >= 0) {
        console.log(down--)
    }
    return down;
}