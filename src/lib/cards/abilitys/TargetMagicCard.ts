import BaseAbilityCard from "./BaseAbilityCard";
import { rules } from './TargetChooseRules'

export default class TargetMagicCard extends BaseAbilityCard {
  needTarget = true
  chooseArea = rules.all

}