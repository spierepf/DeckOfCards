export class Card {
	constructor(rank: Rank, suit: Suit) {
		this.rank = rank
		this.suit = suit
	};

	equals(that: Card): boolean {
		return this.rank === that.rank && this.suit === that.suit
	};
}