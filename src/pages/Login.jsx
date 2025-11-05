function Login() {
  return (
    <div className="page">
      <h2>Login</h2>
      <form className="form">
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        
        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;