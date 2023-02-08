import Player from "@/models/Player";

interface IPlayerStatus {
  player: Player;
}
export default function PlayerStatus({player}: IPlayerStatus) {
  return(
      <>
        <div className={"col-5 d-flex justify-content-end p-0 mt-3 fw-semibold"}>Location:</div><div className={"col-7 mt-3 text-truncate"}>{player.city.name}</div>
        <div className={"col-5 d-flex justify-content-end p-0 mb-3 fw-semibold"}>Hold:</div><div className={"col-3 mb-3"}>{player.sumOfCandies()}</div><div className={"col-4 px-0 mb-3"}>({player.MAX_CANDIES} max)</div>
        <div className={"col-5 d-flex justify-content-end p-0 fw-semibold"}>Cash:</div><div className={"col-7"}>${player.cash}</div>
        <div className={"col-5 d-flex justify-content-end p-0 fw-semibold"}>Bank:</div><div className={"col-7"}>${player.bank.balance}</div>
        <div className={"col-5 d-flex justify-content-end p-0 mb-3 fw-semibold"}>Debt:</div><div className={"col-7 mb-3"}>${player.debt}</div>
        <div className={"col-5 d-flex justify-content-end p-0 mb-3 fw-semibold"}>Day:</div><div className={"col-7 mb-3"}>{player.day}</div>
      </>
  )
};