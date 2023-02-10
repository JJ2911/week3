interface ICandy {
  name: string;
  quantity?: number | null;
  price?: number | null;
}

export default function Candy({name, quantity = null, price = null}: ICandy) {
  return (
      <>
        <div className={"fw-semibold"}>{name}</div>
        {quantity !== null && <div className={"fw-semibold"}>{quantity}</div>}
        {price !== null && <div className={"fw-semibold"}>${price}</div>}
      </>
  )
};