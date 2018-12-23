import BaseAbilityCard from "./BaseAbilityCard";
import TargetChooseRules from './TargetChooseRules'

export default class TargetAbilitiCard extends BaseAbilityCard {
  needTarget = true
  chooseArea = TargetChooseRules.all

}