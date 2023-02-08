interface ICandy {
  name: string;
  quantity?: number;
  price?: number;
}

export default function Candy({name, quantity, price}: ICandy) {
  return (
      <>
        <div className={"fw-semibold"}>{name}</div>
        {quantity && <div className={"fw-semibold"}>{quantity}</div>}
        {price && <div className={"fw-semibold"}>${price}</div>}
      </>
  )
};