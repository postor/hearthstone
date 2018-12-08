import BaseObject from "../BaseObject";
import BasePlayer from "../BasePlayer";
import HeroClassEnum from "../HeroClassEnum";
import CardTypesEnum from "./CardTypesEnum";
import CardRarityEnum from "./CardRarityEnum";

export default class BaseCard extends BaseObject {
  static CardType: CardTypesEnum
  static HeroClass: HeroClassEnum
  static CardRarity: CardRarityEnum
  static IsGolden: false

  constructor(public player: BasePlayer) {
    super(player.game)
  }

}