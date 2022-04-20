import { Rank } from "./rank.ts";

export class RankComparator {
  constructor(ranks: rank[]) {
    for (let i = 0; i < ranks.length - 1; ++i) {
      for (let j = i + 1; j < ranks.length; ++j) {
        if (ranks[i] === ranks[j])
          throw TypeError(
            "RankComparator may not be constructed with duplicated ranks"
          );
      }
    }
    this.ranks = ranks;
  }

  compare(rank1, rank2): int {
    let index1 = this.ranks.indexOf(rank1);
    let index2 = this.ranks.indexOf(rank2);
    if (index1 === -1 || index2 === -1) {
      return undefined;
    }
    return index1 - index2;
  }

  static aceHigh() {
    return new RankComparator([
      Rank.Two,
      Rank.Three,
      Rank.Four,
      Rank.Five,
      Rank.Six,
      Rank.Seven,
      Rank.Eight,
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
      Rank.Ace,
    ]);
  }

  static kingHigh() {
    return new RankComparator([
      Rank.Ace,
      Rank.Two,
      Rank.Three,
      Rank.Four,
      Rank.Five,
      Rank.Six,
      Rank.Seven,
      Rank.Eight,
      Rank.Nine,
      Rank.Ten,
      Rank.Jack,
      Rank.Queen,
      Rank.King,
    ]);
  }
}
