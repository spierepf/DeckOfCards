import { Rank } from "./rank.ts";
import { Suit } from "./suit.ts";
import { Card } from "./card.ts";

export class CardCollection implements Iterable<Card> {
    constructor(cards: Card[]) {
        this.cards = cards
    }

    size(): int {
        return this.cards.length
    };

    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                return {
                    done: i >= this.size(),
                    value: this.cards[i++]
                }
            }
        }
    }

    times(count: int) {
        var new_cards = []
        for (const card of this.cards) {
            for (let i = 0; i < count; ++i) {
                new_cards.push(card)
            }
        }
        return new CardCollection(new_cards)
    }

    static deck(ranks: Rank[], suits: Suit[]) {
        var cards = []
        for (const rank of ranks) {
            for (const suit of suits) {
                cards.push(new Card(rank, suit))
            }
        }
        return new CardCollection(cards)
    }

    static standardDeck(): CardCollection {
        return CardCollection.deck(Object.values(Rank), Object.values(Suit))
    };
}
