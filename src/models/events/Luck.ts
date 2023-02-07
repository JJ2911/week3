import Event from "@/models/events/Event";
import Player from "@/models/Player";
import Candy, {CandyType} from "@/models/Candy";
import {getRandomInt} from "@/models/util/MathUtils";

export default class Luck extends Event {
  private readonly MAX_FOUND_CANDIES = 10;

  public process(player: Player): void {
    const number = Math.random();
    let candyType = null;

    if (number < 0.25) {
      candyType = CandyType.MARS;
    } else if (number < 0.35) {
      candyType = CandyType.HERSHEYS;
    } else if (number < 0.45) {
      candyType = CandyType.MILKY_WAY;
    } else if (number < 0.55) {
      candyType = CandyType.TWIX;
    } else if (number < 0.65) {
      candyType = CandyType.SNICKERS;
    } else if (number < 0.775) {
      candyType = CandyType.BUTTERFINGER;
    } else if (number < 0.9) {
      candyType = CandyType.PEANUT_MMS;
    } else if (number < 0.95) {
      candyType = CandyType.KIT_KAT;
    } else if (number < 0.98) {
      candyType = CandyType.REESES;
    } else if (number < 1) {
      candyType = CandyType.MMS;
    }

    let quantity = getRandomInt(1, this.MAX_FOUND_CANDIES);

    if (player.sumOfCandies() + quantity < player.MAX_CANDIES + this.MAX_FOUND_CANDIES) {
      if (!(player.sumOfCandies() + quantity <= player.MAX_CANDIES)) {
        quantity = quantity - (player.sumOfCandies() + quantity - player.MAX_CANDIES);
      }

      // @ts-ignore
      const candy = player.getCandy(candyType);

      if (candy !== null) {
        candy.quantity = candy.quantity + quantity;
      } else {
        // @ts-ignore
        player.candies.push(new Candy(candyType, candyType.name, quantity));
      }
    }
  }
}