import { RankComparator } from "./rank_comparator.ts";
import { Rank } from "./rank.ts";

test("a rank comparator may not be constructed with duplicate ranks", () => {
  expect(() => {
    new RankComparator([Rank.Jack, Rank.Jack]);
  }).toThrow(TypeError);
});

test("a rank comparator constructed with a subset of ranks leaves comparisons involving missing ranks undefined", () => {
  expect(
    new RankComparator([
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
      Rank.Ace,
    ]).compare(Rank.Eight, Rank.Nine)
  ).toBeUndefined();
});

test("two is higher thant ace in king-high ordering", () => {
  expect(RankComparator.kingHigh().compare(Rank.Two, Rank.Ace)).toBeGreaterThan(
    0
  );
});

test("king is lower thant ace in ace-high ordering", () => {
  expect(RankComparator.aceHigh().compare(Rank.King, Rank.Ace)).toBeLessThan(0);
});
