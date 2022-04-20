export class CardComparator {
  compare(card1: Card, card2: Card): int {
    return undefined;
  }
}

export class TrumpAndLeadCardComparator extends CardComparator {
  constructor(trump: Suit, lead: Suit, rankComparator: RankComparator) {
    super();
    this.trump = trump;
    this.lead = lead;
    this.rankComparator = rankComparator;
  }
  compare(card1: Card, card2: Card): int {
    if (card1.suit === this.trump && card2.suit !== this.trump) return 1;
    if (card1.suit !== this.trump && card2.suit === this.trump) return -1;
    if (card1.suit === this.trump && card2.suit === this.trump)
      return this.rankComparator.compare(card1.rank, card2.rank);

    if (card1.suit === this.lead && card2.suit !== this.lead) return 1;
    if (card1.suit !== this.lead && card2.suit === this.lead) return -1;
    if (card1.suit === this.lead && card2.suit === this.lead)
      return this.rankComparator.compare(card1.rank, card2.rank);
  }
}
