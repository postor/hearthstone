import BaseObject from "../BaseObject";
import BasePlayer from "../BasePlayer";
import AttarkableInterface from "../AttarkableInterface";
import Damage from "../events/Damage";
import BaseMinion from "../minions/BaseMinion";

export default class BaseHero extends BaseObject implements AttarkableInterface {

  static HeroName: string

  turnAttarkCount: number = 0
  turnAttarkLimit: number = 1

  constructor(
    public player: BasePlayer,
    private hp: number = 30,
  ) {
    super(player.game)
  }


  getAttark() {
    return (this.player.myTurn &&
      this.player.weapon &&
      this.player.weapon.attark) || 0
  }

  getHp() {
    return this.hp
  }

  canAttark(target: AttarkableInterface) {
    return !!(this.player.myTurn &&
      this.player.weapon &&
      this.player.weapon.attark)
  }

  attark(target: BaseHero | BaseMinion) {
    new Damage(`${this.getName()} attark ${target.getName()} `, this, [target])
  }

  getName() {
    const Constructor: any = this.constructor;
    return Constructor.HeroName
  }

}