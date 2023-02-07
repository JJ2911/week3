import Market from "@/models/Market";
import {CandyType} from "@/models/Candy";
import Player from "@/models/Player";

export class Location {
  static readonly CHICAGO = new Location("Chicago", 41.8781, 87.6298);
  static readonly DETROIT = new Location("Detroit", 42.3314, 83.0458);
  static readonly LAS_VEGAS = new Location("Las Vegas", 36.1716, 115.1391);
  static readonly LOS_ANGELES = new Location("Los Angeles", 34.0522, 118.2437);
  static readonly MIAMI = new Location("Miami", 25.7617, 80.1918);
  static readonly BRONX = new Location("The Bronx", 40.8448, 73.8648);
  static readonly SAN_DIEGO = new Location("San Diego", 32.7157, 117.1611);
  static readonly WASHINGTON_DC = new Location("Washington D.C.", 38.9072, 77.0369);

  private constructor(public readonly name: string,
                      public readonly lat: number,
                      public readonly lon: number) {
  }

  public static isInBronx(player: Player): boolean {
    return player.city.location === this.BRONX;
  }
}

export default class City {
  private market: Market = new Market();
  private _location: Location;
  private _name: string;

  constructor(location: Location, name: string) {
    this._location = location;
    this._name = name;
  }

  public get location(): Location {
    return this._location;
  }

  public set location(location: Location) {
    this._location = location;
    this.name = location.name;
    this.market.calculateCandyPrices();
  }

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name;
  }

  public getCandyPrice(candyType: CandyType): number | undefined {
    return this.market.candyPrices.get(candyType);
  }
};