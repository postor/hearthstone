import BaseCard from "../BaseCard";
import CardTypes from "../CardTypesEnum";

export default class BaseMinionCard extends BaseCard {
  static CardType = CardTypes.Minion

  /**
   * 圣盾
   */
  public divineShield = false

  /**
   * 嘲讽
   */
  public taunt = false

  /**
   * 亡语
   */
  public deathRattle = undefined
  
  /**
   * 战吼
   */
  public battleCry = undefined

}