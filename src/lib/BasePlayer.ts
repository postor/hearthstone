import BaseObject from "./BaseObject";
import BaseGame from "./BaseGame";
import BaseHero from "./heros/BaseHero";
import BaseCard from "./cards/BaseCard";
import BaseWeapon from "./weapons/BaseWeapon";

export default class BasePlayer extends BaseObject {
  public weapon: BaseWeapon = null
  public myTurn = false
  
  constructor(
    game: BaseGame,
    public name: string = '',
    public hero: BaseHero = null,
    public cards: BaseCard[] = [],
  ) {
    super(game)
  }


}