import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FiLogIn, FiUser } from 'react-icons/fi'

import logo from '../../assets/img/logo.png';

import './styles.scss';

const Header = () => {
  return (
    <Container fluid="true">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <div className="header-menu">
          <ul className="header-menu-items">
            <Link to="/login">
              <li className="header-menu-item"><FiLogIn size={25} />Entrar</li>
            </Link>
            <Link to="/signup">
              <li className="header-menu-item"><FiUser size={25} />Cadastrar</li>
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header;