import Event from "@/models/events/Event";
import Player from "@/models/Player";

export default class Nothing extends Event{
  process(player: Player): void {
  }
};