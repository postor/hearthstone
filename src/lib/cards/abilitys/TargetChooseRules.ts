const myHero = 0b00001,
  myMinion = 0b00010,
  opponentHero = 0b00100,
  opponentMinion = 0b01000,
  allMy = myHero | myMinion,
  allOpponent = opponentMinion | opponentHero,
  allHero = myHero | opponentHero,
  allMinion = myMinion | opponentMinion,
  all = allMy | allOpponent

export default class TargetChooseRules {
  static myHero = myHero
  static myMinion = myMinion
  static opponentHero = opponentHero
  static opponentMinion = opponentMinion
  static allMy = allMy
  static allOpponent = allOpponent
  static allHero = allHero
  static allMinion = allMinion
  static all = all
}