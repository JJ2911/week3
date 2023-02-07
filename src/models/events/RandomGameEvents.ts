import Event from "@/models/events/Event";
import Nothing from "@/models/events/Nothing";
import Luck from "@/models/events/Luck";
import Mugging from "@/models/events/Mugging";

export default class RandomGameEvents {
  private constructor() {
  }

  public static next(): Event {
    const random = Math.random();

    if (random < 0.6) {
      return new Nothing();
    }

    if (random < 0.9) {
      return new Luck();
    }

    return new Mugging();
  }
};