import BaseHero from "./BaseHero";
import JainaProudmoore from "./JainaProudmoore";

const allHeros = [
  JainaProudmoore,
]

export default class HeroUtil {
  static initByName(name,player){
    const HeroClass = allHeros.find(x=>x.HeroName == name)
    if(HeroClass){
      return new HeroClass(player)
    }
    return new JainaProudmoore(player)
  }
}