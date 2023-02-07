import Player from "@/models/Player";
import {Location} from "@/models/City";
import LocationException from "@/models/exceptions/LocationException";
import IllegalArgumentException
  from "@/models/exceptions/IllegalArgumentException";

export default class LoanShark {
  public static readonly INTEREST_RATE = 10;
  private readonly MINIMUM_LOAN = 1_000;
  private readonly MAXIMUM_LOAN = 10_000;

  constructor() {
  }

  public getLoan(player: Player, amount: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("The loan shark is in the Bronx.");
    }

    if (player.debt > 0) {
      throw new IllegalArgumentException(`You still owe me ${player.debt}.`);
    }

    if (amount < this.MINIMUM_LOAN) {
      throw new IllegalArgumentException(`I got a ${this.MINIMUM_LOAN} minimum.`);
    } else if (amount > this.MAXIMUM_LOAN) {
      throw new IllegalArgumentException(`I got a ${this.MAXIMUM_LOAN} maximum.`);
    } else {
      player.cash = player.cash + amount;
      player.debt = amount;
    }
  }

  public payOffLoan(player: Player, amount: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("The loan shark is in the Bronx.");
    }

    const playerDebt = player.debt;
    const playerCash = player.cash;

    if (playerDebt === 0) {
      throw new IllegalArgumentException("You don't owe me anything.");
    }

    if (amount < 1) {
      throw new IllegalArgumentException("The amount needs to be greater than 0.");
    }

    if (amount > playerCash) {
      throw new IllegalArgumentException(`You don't have ${amount} in cash.`);
    }

    if (amount >= playerDebt) {
      player.cash = playerCash - playerDebt;
      player.debt = 0;
    } else {
      player.cash = playerCash - amount;
      player.debt = playerDebt - amount;
    }
  }
};