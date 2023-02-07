import Event from "@/models/events/Event";
import Player from "@/models/Player";

export default class Mugging extends Event{
  process(player: Player): void {
    player.cash = 0;
  }
};