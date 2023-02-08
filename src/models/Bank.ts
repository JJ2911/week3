import Player from "@/models/Player";
import {Location} from "@/models/City";
import LocationException from "@/models/exceptions/LocationException";
import IllegalArgumentException
  from "@/models/exceptions/IllegalArgumentException";
import InsufficientFundsException
  from "@/models/exceptions/InsufficientFundsException";

export default class Bank {
  private readonly INTEREST_RATE = 5.5;
  private _balance = 0;

  constructor() {
  }

  public get balance(): number {
    return this._balance;
  }

  public calculateBalance(): void {
    if (this._balance > 0) {
      this._balance = Math.floor(this._balance * (this.INTEREST_RATE / 100 + 1));
    }
  }

  public deposit(player: Player, amount: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("The bank is located in the Bronx.");
    }

    if (amount < 1) {
      throw new IllegalArgumentException("The amount needs to be greater than 0.");
    }

    if (amount > player.cash) {
      throw new InsufficientFundsException(`You don't have ${amount} in cash.`);
    } else {
      player.cash = player.cash - amount;
      this._balance += amount;
    }
  }

  public withdraw(player: Player, amount: number): void {
    if (!Location.isInBronx(player)) {
      throw new LocationException("The bank is located in the Bronx.");
    }

    if (amount < 1) {
      throw new IllegalArgumentException("The amount needs to be greater than 0.");
    }

    if (amount > this._balance) {
      throw new InsufficientFundsException(`You don't have ${amount} in your balance.`);
    } else {
      player.cash = player.cash + amount;
      this._balance -= amount;
    }
  }
};