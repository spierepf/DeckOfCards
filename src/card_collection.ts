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


    static standardDeck(): CardCollection {
        var cards = []
        for (const rank of Object.values(Rank)) {
            for (const suit of Object.values(Suit)) {
                cards.push(new Card(rank, suit))
            }
        }
        return new CardCollection(cards)
    };
}
