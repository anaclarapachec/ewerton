import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MinhaConta() {
  return (
    <>
      <Navbar />
      <div className="minha-conta">
        <div className="container">
          <div className="linha">
            <div className="col-2">
              <div className="formulario">
                <div className="btn-form">
                  <span>Entrar</span>
                  <span>Cadastro</span>
                  <hr id="Indicador" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
