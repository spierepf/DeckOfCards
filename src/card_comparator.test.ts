import { TrumpAndLeadCardComparator } from "./card_comparator";
import { RankComparator } from "./rank_comparator";
import { Rank } from "./rank";
import { Suit } from "./suit";
import { Card } from "./card";

test("When presented with a trump card and a lead-suited card a TrumpAndLeadCardComparator will rank the trump card higher", () => {
  let comparator = new TrumpAndLeadCardComparator(
    Suit.Spades,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Spades),
      new Card(Rank.Ace, Suit.Hearts)
    )
  ).toBeGreaterThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Hearts),
      new Card(Rank.Two, Suit.Spades)
    )
  ).toBeLessThan(0);
});

test("When presented with two trump cards a TrumpAndLeadCardComparator will rank the cards based on its RankComparator", () => {
  let comparator = new TrumpAndLeadCardComparator(
    Suit.Spades,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Spades),
      new Card(Rank.Ace, Suit.Spades)
    )
  ).toBeLessThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Spades),
      new Card(Rank.Two, Suit.Spades)
    )
  ).toBeGreaterThan(0);
});

test("When presented with a lead-suited card and an off-suit card a TrumpAndLeadCardComparator will rank the lead-suited card higher", () => {
  let comparator = new TrumpAndLeadCardComparator(
    Suit.Spades,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Hearts),
      new Card(Rank.Ace, Suit.Diamonds)
    )
  ).toBeGreaterThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Diamonds),
      new Card(Rank.Two, Suit.Hearts)
    )
  ).toBeLessThan(0);
});

test("When presented with two lead-suited cards a TrumpAndLeadCardComparator will rank the cards based on its RankComparator", () => {
  let comparator = new TrumpAndLeadCardComparator(
    Suit.Spades,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Hearts),
      new Card(Rank.Ace, Suit.Hearts)
    )
  ).toBeLessThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Hearts),
      new Card(Rank.Two, Suit.Hearts)
    )
  ).toBeGreaterThan(0);
});

test("When presented with a lead-suited card and an off-suit card a TrumpAndLeadCardComparator with no trump suit will rank the lead-suited card higher", () => {
  let comparator = new TrumpAndLeadCardComparator(
    null,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Hearts),
      new Card(Rank.Ace, Suit.Spades)
    )
  ).toBeGreaterThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Spades),
      new Card(Rank.Two, Suit.Hearts)
    )
  ).toBeLessThan(0);
});

test("When presented with two lead-suited cards a TrumpAndLeadCardComparator with no trump suit will rank the cards based on its RankComparator", () => {
  let comparator = new TrumpAndLeadCardComparator(
    null,
    Suit.Hearts,
    RankComparator.aceHigh()
  );
  expect(
    comparator.compare(
      new Card(Rank.Two, Suit.Hearts),
      new Card(Rank.Ace, Suit.Hearts)
    )
  ).toBeLessThan(0);
  expect(
    comparator.compare(
      new Card(Rank.Ace, Suit.Hearts),
      new Card(Rank.Two, Suit.Hearts)
    )
  ).toBeGreaterThan(0);
});
