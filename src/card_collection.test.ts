import { CardCollection } from './card_collection.ts'
import { Rank } from './rank.ts'
import { Suit } from './suit.ts'
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

test('a Euchre deck has twenty-four cards', () => {
    expect(CardCollection.deck([Rank.NINE, Rank.TEN, Rank.JACK, Rank.Queen, Rank.KING, Rank.ACE], Object.values(Suit)).size()).toBe(24)
})

test('a Spite and Malice deck has one hundred and fifty six cards', () => {
    expect(CardCollection.standardDeck().times(3).size()).toBe(156)
})
