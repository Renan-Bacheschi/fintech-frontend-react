import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/usuarios">Usuários</Link></li>
        <li><Link to="/contas">Contas</Link></li>
        <li><Link to="/transacoes">Transações</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;