import BaseObject from "../BaseObject";
import BasePlayer from "../BasePlayer";
import AttarkableInterface from "../AttarkableInterface";

export default class BaseHero extends BaseObject implements AttarkableInterface {

  static HeroName:string

  constructor(public player:BasePlayer,private hp: number = 30){
    super(player.game)    
  }


  getAttark() {

  }

  getHp() {

  }

  canAttark(target: AttarkableInterface) {

  }

  attark(target: AttarkableInterface) {

  }

}