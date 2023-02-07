import Candy, {CandyType} from "@/models/Candy";
import Player from "@/models/Player";
import {Location} from "@/models/City";
import LocationException from "@/models/exceptions/LocationException";
import IllegalArgumentException
  from "@/models/exceptions/IllegalArgumentException";

export default class Stash {
  private _candies: Candy[] = [];

  constructor() {
  }

  public get candies(): Candy[] {
    return this._candies;
  }

  public deposit(player: Player, candyType: CandyType, quantity: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("Your stash is located in the Bronx.");
    }

    if (quantity < 1) {
      throw new IllegalArgumentException("Quantity needs to be greater than 0.");
    }

    const playerCandy = player.getCandy(candyType);

    if (playerCandy !== null) {
      if (quantity <= playerCandy.quantity) {
        playerCandy.quantity = playerCandy.quantity - quantity;

        const candy = this.getCandyFromStash(candyType);

        if (candy !== null) {
          candy.quantity = candy.quantity + quantity;
        } else {
          this._candies.push(new Candy(candyType, candyType.name, quantity));
        }

        if (playerCandy.quantity === 0) {
          player.candies = player.candies.filter(candy => candy.candyType !== candyType);
        }
      } else {
        throw new IllegalArgumentException(`You don't have ${quantity} ${candyType.name} on hand.`);
      }
    } else {
      throw new IllegalArgumentException(`You don't have ${candyType.name} on hand.`);
    }
  }

  public withdraw(player: Player, candyType: CandyType, quantity: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("Your stash is located in the Bronx.");
    }

    if (quantity < 1) {
      throw new IllegalArgumentException("Quantity needs to be greater than 0.");
    }

    const candy = this.getCandyFromStash(candyType);

    if (candy !== null) {
      if (quantity <= candy.quantity) {
        candy.quantity = candy.quantity - quantity;

        const playerCandy = player.getCandy(candyType);

        if (playerCandy !== null) {
          playerCandy.quantity = playerCandy.quantity + quantity;
        } else {
          player.candies.push(new Candy(candyType, candyType.name, quantity));
        }

        if (candy.quantity === 0) {
          this._candies = this._candies.filter(candy => candy.candyType !== candyType);
        }
      } else {
        throw new IllegalArgumentException(`You don't have ${quantity} ${candyType.name} in your stash.`);
      }
    } else {
      throw new IllegalArgumentException(`You don't have ${candyType.name} in your stash.`);
    }
  }

  public getCandyFromStash(candyType: CandyType): Candy | null {
    for (const candy of this._candies) {
      if (candy.candyType === candyType) {
        return candy;
      }
    }

    return null;
  }
};