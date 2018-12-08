import BaseObject from "../BaseObject";
import BasePlayer from "../BasePlayer";
import HeroClassEnum from "../HeroClassEnum";
import CardTypesEnum from "./CardTypesEnum";
import CardRarityEnum from "./CardRarityEnum";
import CardSetEnum from "./CardSetEnum";

export default class BaseCard extends BaseObject {
  static CardType: CardTypesEnum
  static HeroClass: HeroClassEnum
  static CardRarity: CardRarityEnum
  static CardSet: CardSetEnum
  static IsGolden: false

  constructor(public player: BasePlayer) {
    super(player.game)
  }

}