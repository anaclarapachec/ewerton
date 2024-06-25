// components/Account.js
import { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function Account() {
  const [activeForm, setActiveForm] = useState('login')

  return (
    <div className="minha-conta">
      <div className="container">
        <div className="linha">
          <div className="col-2">
            <div className="formulario">
              <div className="btn-form">
                <span onClick={() => setActiveForm('login')}>Entrar</span>
                <span onClick={() => setActiveForm('signup')}>Cadastro</span>
                <hr id="Indicador" />
              </div>
              {activeForm === 'login' && <LoginForm />}
              {activeForm === 'signup' && <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
