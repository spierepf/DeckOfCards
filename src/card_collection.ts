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

    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle(): CardCollection {
        let currentIndex = this.cards.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
                this.cards[randomIndex], this.cards[currentIndex]];
        }
        return this
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
