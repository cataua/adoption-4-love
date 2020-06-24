import React from 'react';
import Container from 'react-bootstrap/Container';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import logo from '../../assets/img/logo.png';
import './styles.scss';

const Footer = () => {
  return (
    <Container fluid="true">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="footer-main-content">
        <div className="footer-content">
          <span>SOBRE</span>
          <ul className="footer-content-list">
            <li className="footer-content-items">Como cadastrar</li>
            <li className="footer-content-items">Dúvidas</li>
            <li className="footer-content-items">Sugestões</li>
          </ul>
        </div>

        <div className="footer-content">
          <span>INFORMAÇÕES</span>
          <ul className="footer-content-list">
            <li className="footer-content-items">Como cadastrar</li>
            <li className="footer-content-items">Dúvidas</li>
            <li className="footer-content-items">Sugestões</li>
          </ul>
        </div>

        <div className="footer-content">
          <span>INSTITUCIONAL</span>
          <ul className="footer-content-list">
            <li className="footer-content-items">Como cadastrar</li>
            <li className="footer-content-items">Dúvidas</li>
            <li className="footer-content-items">Sugestões</li>
          </ul>
        </div>
        </div>

        <div className="footer-social">
          <FiTwitter size={35} />
          <FiFacebook size={35} />
          <FiInstagram size={35} />
        </div>
      </div>
    </Container>
  )
}

export default Footer;