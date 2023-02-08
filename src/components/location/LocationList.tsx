import {Location as City} from "@/models/City";
import Location from "@/components/location/Location";
import Player from "@/models/Player";
import DistanceUtils from "@/models/util/DistanceUtils";
import React from "react";

interface ILocationList {
  locations: City[];
  player: Player;
  handleLocationChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function LocationList({locations, player, handleLocationChange}: ILocationList) {
  return (
      <ul className={"list-group"}>
        <button className="btn btn-primary my-2" type="button"
                data-bs-toggle="collapse" data-bs-target="#locations"
                aria-expanded="false" aria-controls="locations">
          Locations
        </button>
        <div className="collapse" id="locations">
          <div className="card card-body border-0 pt-0 px-0">
            {locations.map((location, index) => (
                <li key={index} className={"list-group-item border-0"}>
                  <Location name={location.name}
                            handleLocationChange={handleLocationChange}
                            price={DistanceUtils.calculateTravelPrice(DistanceUtils.distanceTo(player.city.location, location))}/>
                </li>
            ))
            }
          </div>
        </div>
      </ul>
  )
};