import Link from "next/link"; 

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link  href={"/inicio"}>Inicio</Link> <br></br> <br></br>
      <Link  href={"/produtos"}>Produtos</Link> <br></br> <br></br>
      <Link  href={"/minha-conta"}>Minha Conta</Link> <br></br> <br></br>
      <Link  href={"/carrinho"}>Carrinho</Link> <br></br> <br></br>
    </div>
  );
}


