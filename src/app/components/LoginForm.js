export default function LoginForm() {
    return (
      <form action="" method="post" id="EntrarPainel">
        <input type="email" name="email" placeholder="E-mail de acesso" />
        <input type="password" name="senha" placeholder="Digite sua senha" />
        <button type="submit" name="senEntrar" className="btn">Entrar</button>
        <a href="" title="">Esqueceu sua senha?</a>
      </form>
    )
  }
  