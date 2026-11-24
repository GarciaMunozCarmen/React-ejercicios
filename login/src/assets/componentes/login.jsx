function Login() {
  function manejarEnvio() {
    alert("Iniciando sesión...");
  }
  return (
    <form className="contenedor-login" onSubmit={manejarEnvio}>
      <h2>Iniciar Sesión</h2>
      <div className="grupo-campo">
        <label>Usuario</label>
        <input type= "text" placeholder="Introduce tu usuario" />
      </div>
      <div className="grupo-campo">
        <label>Contraseña</label>
        <input type= "password" placeholder="Introduce tu contraseña" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Login;