import React from 'react';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/img/logo.png';

import './styles.scss';

const Header = () => {
  return (
    <Container fluid="true">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="header-menu">
          <ul className="header-menu-items">
            <li className="header-menu-item">Entrar</li>
            <li className="header-menu-item">Cadastrar</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header;