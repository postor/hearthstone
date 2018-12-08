import BaseObject from "./BaseObject";
import BaseGame from "./BaseGame";
import BaseHero from "./heros/BaseHero";
import BaseCard from "./cards/BaseCard";

export default class BasePlayer extends BaseObject {
  constructor(
    game: BaseGame,
    public name: string = '',
    public hero: BaseHero = null,
    public cards: BaseCard[] = [],
  ) {
    super(game)
  }


}