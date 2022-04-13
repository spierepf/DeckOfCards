import { Rank } from "./rank.ts";
import { Suit } from "./suit.ts";
import { Card } from "./card.ts";

test('a card is equal to another card of the same rank and suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Queen, Suit.Spades))).toBeTruthy()
})

test('a card is not equal to another card of the same rank and a different suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Queen, Suit.Diamonds))).toBeFalsy()
})

test('a card is not equal to another card of a different rank and the same suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Ace, Suit.Spades))).toBeFalsy()
})