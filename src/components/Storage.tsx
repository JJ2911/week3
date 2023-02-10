import React, {useState} from "react";
import Player from "@/models/Player";
import {Location} from "@/models/City";
import SelectElement from "@/components/SelectElement";

interface IStorage {
  player: Player;
  handleTransaction: (e: React.MouseEvent<HTMLButtonElement>) => void;
  collapseButtonName: string;
  collapseId: string;
  firstButtonName: string;
  secondButtonName: string;
  selectElement?: JSX.Element;
}

export default function Storage({
                                  player,
                                  handleTransaction,
                                  collapseButtonName,
                                  collapseId,
                                  firstButtonName,
                                  secondButtonName,
                                  selectElement
                                }: IStorage) {
  const [value, setValue] = useState<number>(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(parseInt(e.target.value));
  };

  return (
      <div className={"row"}>
        <button className="btn btn-primary my-2" type="button"
                disabled={Location.isInBronx(player) ? false : true}
                data-bs-toggle="collapse" data-bs-target={`#${collapseId}`}
                aria-expanded="false" aria-controls={collapseId}>
          {collapseButtonName}
        </button>
        <div className="collapse" id={collapseId}>
          <div className="card card-body border-0 pt-0 px-0">
            <form>
              <div className="d-flex flex-column">
                <input type="number"
                       onChange={onChange}
                       className="form-control text-center rounded-bottom-0"
                       placeholder="Amount"/>
                {selectElement && selectElement}
                <button className="btn btn-secondary mt-1 rounded-0"
                        onClick={handleTransaction}
                        name={firstButtonName}
                        value={value}
                        type="button">
                  {firstButtonName}
                </button>
                <button className="btn btn-secondary mt-1 rounded-top-0"
                        onClick={handleTransaction}
                        name={secondButtonName}
                        value={value}
                        type="button">
                  {secondButtonName}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};