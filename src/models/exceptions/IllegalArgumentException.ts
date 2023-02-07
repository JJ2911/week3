export default class IllegalArgumentException {
  private message: string;
  private name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "IllegalArgumentException";
  }
};