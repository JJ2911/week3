interface ICandy {
  name: string;
  quantity?: number;
  price?: number;
}

export default function Candy({name, quantity, price}: ICandy) {
  return (
      <>
        <div>{name}</div>
        {quantity && <div>{quantity}</div>}
        {price && <div>{price}</div>}
      </>
  )
};