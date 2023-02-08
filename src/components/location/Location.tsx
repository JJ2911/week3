import React from "react";

interface ILocation {
  name: string;
  price: number;
  handleLocationChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Location({name, price, handleLocationChange}: ILocation) {
  return (
      <div className={"row"}>
        <button type="button"
                name={name}
                value={price}
                onClick={handleLocationChange}
                className="btn btn-secondary btn-sm position-relative">
          <span
              className="badge text-bg-light me-2 position-absolute top-50 start-0 translate-middle ms-4">${price}</span>
          {name}
        </button>
      </div>
  )
};