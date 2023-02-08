import React, {useState} from "react";

interface IBank {
  handleBankTransaction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Bank({handleBankTransaction}: IBank) {
  const [value, setValue] = useState<number>(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(parseInt(e.target.value));
  };

  return (
      <div className={"row"}>
        <button className="btn btn-primary my-2" type="button"
                data-bs-toggle="collapse" data-bs-target="#bank"
                aria-expanded="false" aria-controls="bank">
          Bank
        </button>
        <div className="collapse" id="bank">
          <div className="card card-body border-0 pt-0 px-0">
            <form>
              <div className="d-flex flex-column">
                <input type="number"
                       onChange={onChange}
                       className="form-control text-center rounded-bottom-0"
                       placeholder="Amount"/>
                <button className="btn btn-secondary mt-1 rounded-0"
                        onClick={handleBankTransaction}
                        name={"deposit"}
                        value={value}
                        type="button">Deposit
                </button>
                <button className="btn btn-secondary mt-1 rounded-top-0"
                        onClick={handleBankTransaction}
                        name={"withdraw"}
                        value={value}
                        type="button">Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
};