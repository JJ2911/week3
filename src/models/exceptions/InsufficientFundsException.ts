export default class InsufficientFundsException {
  private message: string;
  private name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "InsufficientFundsException";
  }
};