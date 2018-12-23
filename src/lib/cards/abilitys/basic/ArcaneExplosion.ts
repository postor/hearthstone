import CardSetEnum from "../../CardSetEnum";
import NotargetAbilityCard from "../NotargetAbilityCard";
import HeroClassEnum from "../../../HeroClassEnum";
import CardRarityEnum from "../../CardRarityEnum";
import TargetChooseRules from "../TargetChooseRules";

/**
 * 魔爆术
 */
export default class ArcaneExplosion extends NotargetAbilityCard {
  //基础集合
  static CardSet = CardSetEnum.Basic

  //法师牌
  static HeroClass = HeroClassEnum.Mage

  //普通卡
  static CardRarity: CardRarityEnum.Free
  
  //非金色
  static IsGolden: false

  damage = 1

  //所有敌方随从收到1点伤害
  ability(){
    TargetChooseRules.opponentMinion
  }

}