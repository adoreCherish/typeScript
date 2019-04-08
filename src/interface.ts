interface labelValue {
    label?: string;
    readonly name: string;
}
function printLabelValue( value: labelValue ): string {
    console.log(value.label)
    return value.name;
}
var p = printLabelValue({name: 'wyq'})
console.log(p)

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function( this: Deck ) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let createCardPicker = deck.createCardPicker()
console.log(createCardPicker().suit, createCardPicker().card)

interface anyArray {
    [index: number]: any;
}
let myArray: anyArray = ['1',1,{a:1,b:2}]
console.log(myArray)

