import BaseObject from "../BaseObject";
import BasePlayer from "../BasePlayer";
import AttarkableInterface from "../AttarkableInterface";
import Damage from "../events/Damage";
import BaseHero from "../heros/BaseHero";

export default class BaseMinion extends BaseObject implements AttarkableInterface {

  static MinionName: string

  turnAttarkCount: number = 0
  turnAttarkLimit: number = 1
  position: number = 0
  canNotAttark = false

  constructor(
    public player: BasePlayer,
    public hp: number = 30,
    public strength = 0
  ) {
    super(player.game)
  }


  getAttark() {
    return this.strength
  }

  getHp() {
    return this.hp
  }

  canAttark(target: AttarkableInterface) {
    return !this.canNotAttark && !!this.strength
  }

  attark(target: BaseHero | BaseMinion) {
    this.game.queue(new Damage(
      `${this.getName()} attark ${target.getName()} `,
      this,
      [target]
    ))
    this.game.queue(new Damage(
      `${this.getName()} attark ${target.getName()} `,
      this,
      [target]
    ))
  }

  getName() {
    const Constructor: any = this.constructor;
    return Constructor.HeroName
  }

}