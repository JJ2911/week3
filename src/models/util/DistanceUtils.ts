import {Location} from "@/models/City";

export default class DistanceUtils {
  private static pricePerKm = 0.10;

  public static distanceTo(location1: Location, location2: Location): number {
    let lat1 = location1.lat;
    let lon1 = location1.lon;
    let lat2 = location2.lat;
    let lon2 = location2.lon;

    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    }

    let dLat = (lat2 - lat1) * Math.PI / 180.0;
    let dLon = (lon2 - lon1) * Math.PI / 180.0;

    lat1 = (lat1) * Math.PI / 180.0;
    lat2 = (lat2) * Math.PI / 180.0;

    let a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dLon / 2), 2);

    return 2 * 6371 * Math.asin(Math.sqrt(a));
  }

  public static calculateTravelPrice(distance: number): number {
    return Math.round(distance * this.pricePerKm);
  }
}