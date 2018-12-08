import BaseHero from "../heros/BaseHero";
import BaseCard from "../cards/BaseCard";
import { Emitter } from 'event-emitter';
import BaseGame from "../BaseGame";
import BasePlayer from "../BasePlayer";
import HeroUtil from "../heros/HeroUtil";
import CardUtil from "../cards/CardUtil";

export default class PlayerData {
  
  constructor(
    public account: string,
    public heroName: string,
    public cardNames: string[],
    public eventEmitter: Emitter) {

  }

  initPlayer(game:BaseGame){
    const player = new BasePlayer(game,this.account)
    player.hero = HeroUtil.initByName(this.heroName,player)
    player.cards = this.cardNames.map(x=>CardUtil.initByName(x,player))

    return player
  }


}