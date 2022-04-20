import { CardCollection } from "./card_collection";
import { Rank } from "./rank";
import { Suit } from "./suit";
import { Card } from "./card";

test("a standard deck consists of fifty-two cards", () => {
  expect(CardCollection.standardDeck().size()).toBe(52);
});

test("we can iterate over a standard deck", () => {
  let count = 0;
  for (let card of CardCollection.standardDeck()) {
    count++;
  }
  expect(count).toBe(52);
});

test("the items in a standard deck are distinct", () => {
  for (let card1 of CardCollection.standardDeck()) {
    let count = 0;
    for (let card2 of CardCollection.standardDeck()) {
      if (card1.equals(card2)) {
        count++;
      }
    }
    expect(count).toBe(1);
  }
});

test("the items in a standard deck are Cards", () => {
  for (let card of CardCollection.standardDeck()) {
    expect(card).toBeInstanceOf(Card);
  }
});

test("a Euchre deck has twenty-four cards", () => {
  expect(
    CardCollection.deck([
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
      Rank.Ace,
    ]).size()
  ).toBe(24);
});

test("a Spite and Malice deck has one hundred and fifty six cards", () => {
  expect(CardCollection.standardDeck(3).size()).toBe(156);
});

test("drawing a card from a singleton CardCollection gets you that card", () => {
  expect(
    new CardCollection([new Card(Rank.Queen, Suit.Spades)])
      .draw()
      .equals(new Card(Rank.Queen, Suit.Spades))
  ).toBeTruthy();
});

test("drawing a card from a CardCollection removes that card from the CardCollection", () => {
  let collection = CardCollection.standardDeck();
  collection.draw()
  expect(collection.size()).toBe(51);
});

test("drawing two cards from a doubleton CardCollection gets you both cards in reverse order", () => {
  let deck = new CardCollection([
    new Card(Rank.Queen, Suit.Spades),
    new Card(Rank.Two, Suit.Clubs),
  ]);
  expect(deck.draw().equals(new Card(Rank.Two, Suit.Clubs))).toBeTruthy();
  expect(deck.draw().equals(new Card(Rank.Queen, Suit.Spades))).toBeTruthy();
});

test("shuffling a deck of cards does not change the number of cards in the deck", () => {
  expect(CardCollection.standardDeck().shuffle().size()).toBe(52);
});

test("shuffling a deck of cards does not change the set of cards in the deck", () => {
  for (let card1 of CardCollection.standardDeck().shuffle()) {
    let count = 0;
    for (let card2 of CardCollection.standardDeck()) {
      if (card1.equals(card2)) {
        count++;
      }
    }
    expect(count).toBe(1);
  }
});

test("shuffling two separate decks of cards is unlikely to get you the same ordering", () => {
  let deck1 = CardCollection.standardDeck().shuffle();
  let deck2 = CardCollection.standardDeck().shuffle();
  let count = 0;
  for (let i = deck1.size(); i > 0; --i) {
    if (deck1.draw().equals(deck2.draw())) {
      count++;
    }
  }
  expect(count).toBeLessThan(52);
});
