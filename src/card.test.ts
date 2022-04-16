import { Rank } from "./rank.ts";
import { Suit } from "./suit.ts";
import { Card } from "./card.ts";

test('attempting to construct a card with an undefined rank throws Error', () => {
	expect(() => {
		new Card(undefined, Suit.Spades)
	}).toThrow(TypeError)
})

test('attempting to construct a card with an undefined suit throws Error', () => {
	expect(() => {
		new Card(Rank.Queen, undefined)
	}).toThrow(TypeError)
})

test('attempting to construct a card with a null rank throws Error', () => {
	expect(() => {
		new Card(null, Suit.Spades)
	}).toThrow(TypeError)
})

test('attempting to construct a card with a null suit throws Error', () => {
	expect(() => {
		new Card(Rank.Queen, null)
	}).toThrow(TypeError)
})

test('a card is equal to another card of the same rank and suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Queen, Suit.Spades))).toBeTruthy()
})

test('a card is not equal to another card of the same rank and a different suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Queen, Suit.Diamonds))).toBeFalsy()
})

test('a card is not equal to another card of a different rank and the same suit', () => {
	expect(new Card(Rank.Queen, Suit.Spades).equals(new Card(Rank.Ace, Suit.Spades))).toBeFalsy()
})
