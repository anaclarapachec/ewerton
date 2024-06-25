import Image from 'next/image';

const Footer = () => {

  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>ENTREGA</h4>
            <ul>
              <li><a href="#">Produtos apenas por encomendas, 
              <br></br> taxa de entrega no valor de R$5,00</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>CONTATOS</h4>
            <ul>
              <li><a href="#">dociedoceriaagourmet@gmail.com</a></li>
              <li><a href="#">(14) 99636 - 0889</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>PAGAMENTOS</h4>
            <ul>
                <Image src="/visa-17.png" alt="" width={70} height={50} />
          
                <Image src="/bradesco-17.png" alt="" width={50} height={50} />
          
                <Image src="/bb-17.png" alt="" width={50} height={50} />

                <br></br>
             
                <Image src="/itau-17.png" alt="" width={50} height={50} />
            
                <Image src="/pix-17.png" alt="" width={50} height={50} />
     
            </ul>
          </div>
          <div className="footer-col">
            <h4>CADASTRE-SE</h4>
            <div className="form-sub">
              <form>
                <input type="email" placeholder="Digite o seu e-mail" required />
                <button>cadastrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
