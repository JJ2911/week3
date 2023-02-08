import City, {Location} from "@/models/City";
import Candy, {CandyType} from "@/models/Candy";
import InsufficientFundsException
  from "@/models/exceptions/InsufficientFundsException";
import InventoryException from "@/models/exceptions/InventoryException";
import IllegalArgumentException
  from "@/models/exceptions/IllegalArgumentException";
import Bank from "@/models/Bank";
import Stash from "@/models/Stash";
import LocationException from "@/models/exceptions/LocationException";
import LoanShark from "@/models/LoanShark";
import RandomGameEvents from "@/models/events/RandomGameEvents";

export default class Player {
  private readonly _MAX_CANDIES = 100;
  private _cash = 2_000;
  private _debt = 0;
  private _day = 1;
  private _city = new City(Location.BRONX, Location.BRONX.name);
  private _bank = new Bank();
  private _stash = new Stash();
  private _candies: Candy[] = [];

  constructor(player?: Player | null) {
    if (player) {
      this._cash = player.cash;
      this._debt = player.debt;
      this._day = player.day;
      this._city = player.city;
      this._bank = player.bank;
      this._stash = player.stash;
      this._candies = player.candies;
    }
  }

  public get MAX_CANDIES(): number {
    return this._MAX_CANDIES;
  }

  public get cash(): number {
    return this._cash;
  }

  public set cash(cash: number) {
    this._cash = cash;
  }

  public get debt(): number {
    return this._debt;
  }

  public set debt(debt: number) {
    this._debt = debt;
  }

  public get day(): number {
    return this._day;
  }

  public set day(day: number) {
    this._day = day;
  }

  public get city(): City {
    return this._city;
  }

  public set city(city: City) {
    this._city = city;
  }

  public get bank(): Bank {
    return this._bank;
  }

  public set bank(bank: Bank) {
    this._bank = bank;
  }

  public get stash(): Stash {
    return this._stash;
  }

  public set stash(stash: Stash) {
    this._stash = stash;
  }

  public get candies(): Candy[] {
    return this._candies;
  }

  public set candies(candies: Candy[]) {
    this._candies = candies;
  }

  public buy(candyType: CandyType, quantity: number, price: number): void {
    if (quantity < 1) {
      throw new IllegalArgumentException("Quantity must be greater than 0.");
    }

    if (this.sufficientStorage(quantity)) {
      if (quantity * price <= this._cash) {
        this._cash -= quantity * price;

        const candy = this.getCandy(candyType);

        if (candy !== null) {
          candy.quantity = candy.quantity + quantity;
        } else {
          this._candies.push(new Candy(candyType, candyType.name, quantity));
        }
      } else {
        throw new InsufficientFundsException("Insufficient funds.");
      }
    } else {
      throw new InventoryException("Not enough space available.");
    }
  }

  public sell(candyType: CandyType, quantity: number, price: number): void {
    if (quantity < 1) {
      throw new IllegalArgumentException("Quantity must be greater than 0.");
    }

    const candy = this.getCandy(candyType);

    if (candy !== null) {
      if (quantity <= candy.quantity) {
        candy.quantity = candy.quantity - quantity;
        this._cash += quantity * price;

        if (candy.quantity === 0) {
          this._candies = this._candies.filter(candy => candy.candyType !== candyType);
        }
      } else {
        throw new IllegalArgumentException(`Not enough ${candy.name} on hand.`);
      }
    } else {
      throw new IllegalArgumentException(`You don't have ${candyType.name}.`);
    }
  }

  public travelTo(location: Location, price: number): void {
    if (this._city.location === location) {
      throw new LocationException(`You're already in ${location.name}.`);
    }

    if (price <= this._cash) {
      this._city.location = location;
      this._cash -= price;
      this._day += 1;
      this._bank.calculateBalance();
      this._debt *= LoanShark.INTEREST_RATE / 100 + 1;
      RandomGameEvents.next().process(this);
    } else {
      throw new InsufficientFundsException("Insufficient funds.");
    }
  }

  public sufficientStorage(quantity: number): boolean {
    return this.sumOfCandies() + quantity <= this._MAX_CANDIES ? true : false;
  }

  public sumOfCandies(): number {
    let sum = 0;

    for (const candy of this._candies) {
      sum += candy.quantity;
    }

    return sum;
  }

  public getCandy(candyType: CandyType): Candy | null {
    for (const candy of this._candies) {
      if (candy.candyType === candyType) {
        return candy;
      }
    }

    return null;
  }

  public getCandyQuantity(candyType: CandyType): number {
    const candy = this.getCandy(candyType);
    return candy === null ? 0 : candy.quantity;
  }

  public location(): string {
    return this._city.name;
  }
};