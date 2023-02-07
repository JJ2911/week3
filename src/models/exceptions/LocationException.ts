export default class LocationException {
  private message: string;
  private name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "LocationException";
  }
};