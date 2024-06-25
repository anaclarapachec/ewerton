export default function SignupForm() {
    return (
      <form action="" method="post" id="CadastroSite">
        <input type="text" name="nome" placeholder="Nome Completo" />
        <input type="email" name="email" placeholder="E-mail de acesso" />
        <input type="password" name="senha" placeholder="Digite sua senha" />
        <button type="submit" name="senCad" className="btn">Cadastre-se</button>
      </form>
    )
  }
  