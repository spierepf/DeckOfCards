export class Card {
	constructor(rank: Rank, suit: Suit) {
		if(!rank || !suit) {
			throw TypeError("Neither the rank nor suit of a Card may be undefined or null")
		}
		this.rank = rank
		this.suit = suit
	};

	equals(that: Card): boolean {
		return this.rank === that.rank && this.suit === that.suit
	};
}