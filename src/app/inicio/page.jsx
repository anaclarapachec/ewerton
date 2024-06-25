import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="categorias">
          <div className="corpo-categorias">
            <div className="linha">
              <div className="col-2">
                <Image src="/cenario-1.png" alt="Cenário 1" width={400} height={300} />
              </div>
              <div className="col-2">
                <Image src="/cenario-3.png" alt="Cenário 3" width={400} height={300} />
              </div>
              <div className="col-2">
                <Image src="/cenario-2.png" alt="Cenário 2" width={400} height={300} />
              </div>
            </div>
          </div>
          <div className="favoritos">
            <div className="corpo-categorias">
              <h2 className="titulo">Produtos em Destaque</h2>
              <div className="linha">
                <div className="col-3">
                  <Image src="/destaque--1.png" alt="Bolo de Nozes" width={150} height={100} />
                  <h3>BOLO DE NOZES</h3>
                  <p>Massa cookie recheada e coberta com mousse de chocolate belga 70% cacau e nozes, polvilhada com cacau em pó.</p>
                </div>
                <div className="col-3">
                  <Image src="/destaque--3.png" alt="Bolo de Nozes" width={150} height={100}/>
                  <h3>BOLO DE NOZES</h3>
                  <p>Massa cookie recheada e coberta com mousse de chocolate belga 70% cacau e nozes, polvilhada com cacau em pó.</p>
                </div>
                <div className="col-3">
                  <Image src="/destaque--2.png" alt="Bolo de Nozes" width={150} height={100} />
                  <h3>BOLO DE NOZES</h3>
                  <p>Massa cookie recheada e coberta com mousse de chocolate belga 70% cacau e nozes, polvilhada com cacau em pó.</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="titulo">Novos Produtos</h2>
          <div className="novos-produtos">
            <div className="linha">
              <div className="col-4">
                <Image src="/produto-1.png" alt="Bolo Bruna" width={300} height={200} />
                <h4>BOLO BRUNA</h4>
                <p>R$140,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-2.png" alt="Bolo Crocante" width={300} height={200} />
                <h4>BOLO CROCANTE</h4>
                <p>R$80,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-3.png" alt="Bolo de Leite em Pó" width={300} height={200} />
                <h4>BOLO DE LEITE EM PÓ</h4>
                <p>R$90,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-4.png" alt="Bolo de Morango" width={300} height={200} />
                <h4>BOLO DE MORANGO</h4>
                <p>R$100,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-5.png" alt="Bolo Bruna" width={300} height={200} />
                <h4>BOLO BRUNA</h4>
                <p>R$150,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-6.png" alt="Bolo Ninho" width={300} height={200} />
                <h4>BOLO NINHO</h4>
                <p>R$60,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-7.png" alt="Pavê de Ninho" width={300} height={200} />
                <h4>PAVÊ DE NINHO</h4>
                <p>R$85,00</p>
              </div>
              <div className="col-4">
                <Image src="/produto-8.png" alt="Torta de Nozes" width={300} height={200} />
                <h4>TORTA DE NOZES</h4>
                <p>R$96,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
