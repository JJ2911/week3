import {CandyType} from "@/models/Candy";
import Player from "@/models/Player";
import Candy from "@/components/candy/Candy";
import React from "react";
import City from "@/models/City";

interface ICandyList {
  candyTypes: CandyType[];
  player?: Player | null;
  city?: City | null;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonName: string;
}

export default function CandyList({
                                    candyTypes,
                                    player,
                                    city,
                                    handleInputChange,
                                    onSubmit,
                                    buttonName
                                  }: ICandyList) {
  return (
      <ul className={"list-group"}>
        {candyTypes.map((candyType, index) => (
            <li key={index}
                className={"list-group-item border-0"}>

              <div className={"row"}>
                <div className={"d-flex flex-row justify-content-between"}>
                  <Candy name={candyType.name}
                         price={city ? city.getCandyPrice(candyType) : null}
                         quantity={player ? player.getCandyQuantity(candyType) : null}
                  />

                </div>
                <form onSubmit={onSubmit} name={candyType.name}>
                  <div className="input-group input-group-sm mt-1 mb-3">
                    <input type="number"
                           name={candyType.name}
                           className="form-control"
                           min={1} max={100}
                           placeholder="Quantity"
                           aria-label={`${buttonName} Quantity`}
                           onChange={handleInputChange}
                    />
                    <button className="btn btn-outline-secondary"
                            type="submit">{buttonName}
                    </button>
                  </div>
                </form>
              </div>
            </li>
        ))}
      </ul>
  );
};