export default class InventoryException {
  private message: string;
  private name: string;

  constructor(message: string) {
    this.message = message;
    this.name = "InventoryException";
  }
};