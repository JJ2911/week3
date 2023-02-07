import {CandyType} from "@/models/Candy";
import {getRandomInt} from "@/models/util/MathUtils";

export default class Market {
  private _candyPrices: Map<CandyType, number> = new Map();

  constructor() {
    this.calculateCandyPrices()
  }

  public get candyPrices(): Map<CandyType, number> {
    return this._candyPrices;
  }

  public calculateCandyPrices(): void {
    this._candyPrices.set(CandyType.MMS, getRandomInt(5_000, 10_000));
    this._candyPrices.set(CandyType.REESES, getRandomInt(2_000, 5_000));
    this._candyPrices.set(CandyType.KIT_KAT, getRandomInt(1_000, 2_000));
    this._candyPrices.set(CandyType.PEANUT_MMS, getRandomInt(750, 1_000));
    this._candyPrices.set(CandyType.BUTTERFINGER, getRandomInt(500, 750));
    this._candyPrices.set(CandyType.SNICKERS, getRandomInt(400, 500));
    this._candyPrices.set(CandyType.TWIX, getRandomInt(300, 400));
    this._candyPrices.set(CandyType.MILKY_WAY, getRandomInt(200, 300));
    this._candyPrices.set(CandyType.HERSHEYS, getRandomInt(100, 200));
    this._candyPrices.set(CandyType.MARS, getRandomInt(10, 100));
  }
};
