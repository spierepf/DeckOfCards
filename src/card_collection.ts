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

    draw(): Card {
        return this.cards.pop()
    }

    static deck(ranks: Rank[] = Object.values(Rank), suits: Suit[] = Object.values(Suit), count: int = 1) {
        var cards = []
        for (const rank of ranks) {
            for (const suit of suits) {
                for (let i = 0; i < count; ++i) {
                    cards.push(new Card(rank, suit))
                }
            }
        }
        return new CardCollection(cards)
    }

    static standardDeck(count: int = 1) {
        return CardCollection.deck(undefined, undefined, count)
    }
}
