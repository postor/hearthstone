import BaseCard from "../BaseCard";
import CardTypes from "../CardTypesEnum";

export default class BaseAbilityCard extends BaseCard {
  static CardType = CardTypes.Ability

  public needTarget = false
  
  magic(){
    
  }
}