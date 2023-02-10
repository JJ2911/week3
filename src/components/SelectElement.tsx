import React from "react";
import {CandyType} from "@/models/Candy";

interface ISelectElement {
  list: CandyType[];
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function SelectElement({list, value, onChange}: ISelectElement) {
  return(
      <select className={"form-select form-select-sm rounded-0 mt-1"} value={value} onChange={onChange}>
        {list.map((value, index) => (
            <option key={index} value={value.name}>{value.name}</option>
        ))}
      </select>
  )
};