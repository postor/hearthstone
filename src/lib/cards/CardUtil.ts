import BaseCard from "./BaseCard";

export default class CardUtil {
  static initByName(name,player){
    return new BaseCard(player)
  }
}