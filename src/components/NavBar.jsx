import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Fintech</h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {!usuario ? (
          <li><Link to="/login">Login</Link></li>
        ) : (
          <>
            <li><span>{usuario.nome}</span></li>
            <li><button onClick={handleLogout}>Sair</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;