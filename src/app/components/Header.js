const Header = () => {
    return (
      <div className={styles.novoMenu}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <nav>
              <ul className={styles.MenuItens}>
                <li><a href="/">Início</a></li>
                <li><a href="/produtos">Produtos</a></li>
                <li><a href="/minha-conta">Minha Conta</a></li>
              </ul>
            </nav>
            <a href="/carrinho">
              <img src="/assets/img/doces/carrinho.png" alt="Carrinho" width="30px" height="30px" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;
  