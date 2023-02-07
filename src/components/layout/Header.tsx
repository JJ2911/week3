interface IHeader {
  name: string;
}

export default function Header({name}: IHeader) {
  return (
      <>
        <header className={"d-flex justify-content-center align-items-center my-3"}>
          <h1>{name}</h1>
        </header>
      </>
  )
};