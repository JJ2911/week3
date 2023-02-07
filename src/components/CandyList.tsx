import {CandyType} from "@/models/Candy";
import Player from "@/models/Player";
import Candy from "@/components/Candy";

interface ICandyList {
  candyTypes: CandyType[];
  player: Player | null;
  price: boolean;
}

export default function CandyList({candyTypes, player, price}: ICandyList) {
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
                    <div className="input-group input-group-sm mt-1 mb-3">
                      <input type="text" className="form-control"
                             placeholder="Recipient's username"
                             aria-label="Recipient's username"/>
                      <button className="btn btn-outline-secondary"
                              type="button">Button
                      </button>
                    </div>
                  </div>
                  :
                  <div className={"row"}>
                    <div className={"d-flex flex-row justify-content-between"}>
                      <Candy name={candyType.name}
                             quantity={player ? player.getCandyQuantity(candyType) : 0}/>
                    </div>
                    <div className="input-group input-group-sm mt-1 mb-3">
                      <input type="text" className="form-control"
                             placeholder="Recipient's username"
                             aria-label="Recipient's username"/>
                      <button className="btn btn-outline-secondary"
                              type="button">Button
                      </button>
                    </div>
                  </div>
              }
            </li>
        ))}
      </ul>
  )
};