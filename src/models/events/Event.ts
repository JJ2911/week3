import Player from "@/models/Player";

export default abstract class Event {
  abstract process(player: Player): void;
}