export class CandyType {
  static readonly MMS = new CandyType("M&Ms");
  static readonly REESES = new CandyType("Reese's");
  static readonly KIT_KAT = new CandyType("Kit Kat");
  static readonly PEANUT_MMS = new CandyType("Peanut M&Ms");
  static readonly BUTTERFINGER = new CandyType("Butterfinger");
  static readonly SNICKERS = new CandyType("Snickers");
  static readonly TWIX = new CandyType("Twix");
  static readonly MILKY_WAY = new CandyType("Milky Way");
  static readonly HERSHEYS = new CandyType("Hershey's");
  static readonly MARS = new CandyType("Mars");

  private constructor(public readonly name: string) {
  }
}
export default class Candy {
  private _candyType: CandyType;
  private _name: string;
  private _quantity: number;

  constructor(candyType: CandyType, name: string, quantity: number) {
    this._candyType = candyType;
    this._name = name;
    this._quantity = quantity;
  }

  public get candyType(): CandyType {
    return this._candyType;
  }

  public set candyType(candyType: CandyType) {
    this._candyType = candyType;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(quantity: number) {
    this._quantity = quantity;
  }
}
