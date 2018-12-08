const myHero = 0b00001,
  myMinion = 0b00010,
  opponentHero = 0b00100,
  opponentMinion = 0b01000,
  allMy = myHero | myMinion,
  allOpponent = opponentMinion | opponentHero,
  allHero = myHero | opponentHero,
  allMinion = myMinion | opponentMinion,
  all = allMy | allOpponent

export const rules = {
  myHero,
  myMinion,
  opponentHero,
  opponentMinion,
  allMy,
  allOpponent,
  allHero,
  allMinion,
  all
}