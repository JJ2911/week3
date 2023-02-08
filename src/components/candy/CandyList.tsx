import {CandyType} from "@/models/Candy";
import Player from "@/models/Player";
import Candy from "@/components/candy/Candy";
import React from "react";

interface ICandyList {
  candyTypes: CandyType[];
  player: Player | null;
  price: boolean;
  handleBuyInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSellInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBuySubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onSellSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CandyList({
                                    candyTypes,
                                    player,
                                    price,
                                    handleBuyInputChange,
                                    handleSellInputChange,
                                    onBuySubmit,
                                    onSellSubmit
                                  }: ICandyList) {
  return (
      <ul className={"list-group"}>
        {candyTypes.map((candyType, index) => (
            <li key={index}
                className={"list-group-item border-0"}>
              {price === true ?
                  <div className={"row"}>
                    <div className={"d-flex flex-row justify-content-between"}>
                      <Candy name={candyType.name}
                             price={player ? player.city.getCandyPrice(candyType) : 0}/>

                    </div>
                    <form onSubmit={onBuySubmit} name={candyType.name}>
                      <div className="input-group input-group-sm mt-1 mb-3">
                        <input type="number"
                               name={candyType.name}
                               className="form-control"
                               min={1} max={100}
                               placeholder="Quantity"
                               aria-label="Buy Quantity"
                               onChange={handleBuyInputChange}
                        />
                        <button className="btn btn-outline-secondary"
                                type="submit">Buy
                        </button>
                      </div>
                    </form>
                  </div>
                  :
                  <div className={"row"}>
                    <div className={"d-flex flex-row justify-content-between"}>
                      <Candy name={candyType.name}
                             quantity={player ? player.getCandyQuantity(candyType) : 0}/>
                    </div>
                    <form onSubmit={onSellSubmit} name={candyType.name}>
                      <div className="input-group input-group-sm mt-1 mb-3">
                        <input type="number"
                               name={candyType.name}
                               className="form-control"
                               min={1} max={100}
                               placeholder="Quantity"
                               aria-label="Sell Quantity"
                               onChange={handleSellInputChange}
                        />
                        <button className="btn btn-outline-secondary"
                                type="submit">Sell
                        </button>
                      </div>
                    </form>
                  </div>
              }
            </li>
        ))}
      </ul>
  );
};