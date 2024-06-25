import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Image src="/bolo.png" alt="DOCIÊ" width={50} height={50} />
      </div>
      <nav>
        <ul id="MenuItens">
          <li><a href="/">Início</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/minha-conta">Minha Conta</a></li>
        </ul>
      </nav>
      <a href="/carrinho">
        <Image src="/carrinh.png" alt="carrinho" width={30} height={25} style={{color:'#920'}}/>
      </a>
      <Image src="/menu.png" alt="Menu Celular" className="menu-celular" width={30} height={30} />
    </div>
  );
};

export default Navbar;
