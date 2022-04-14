import { CardCollection } from './card_collection.ts'
import { Card } from './card.ts'

test('a standard deck consists of fifty-two cards', () => {
    expect(CardCollection.standardDeck().size()).toBe(52)
})

test('we can iterate over a standard deck', () => {
    let count = 0
    for(let card of CardCollection.standardDeck()) {
        count++
    }
    expect(count).toBe(52)
})

test('the items in a standard deck are distinct', () => {
    for(let card1 of CardCollection.standardDeck()) {
        let count = 0
        for(let card2 of CardCollection.standardDeck()) {
            if(card1.equals(card2)) {
                count++
            }
        }
        expect(count).toBe(1)
    }
})

test('the items in a standard deck are Cards', () => {
    for(let card of CardCollection.standardDeck()) {
        expect(card).toBeInstanceOf(Card)
    }
})
