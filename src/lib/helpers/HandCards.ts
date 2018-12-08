import BasePlayer from "../BasePlayer";
import BaseCard from "../cards/BaseCards";

const HAND_CARDS_COUNT_MAX = 10

export default class HandCards {
  cards: BaseCard[] = []
  constructor(private player: BasePlayer) { }

  add(card: BaseCard) {
    if (this.cards.length >= 0) {
      return
    }
    this.cards = [...this.cards, card]
  }

  use(index:number){
    
  }
}