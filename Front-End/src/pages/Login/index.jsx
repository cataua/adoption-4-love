import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, AnimationContainer } from './styles';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  render() {
    return (
      <Container>
      <Content>
        <AnimationContainer>
          <h1>HUMANIZE</h1>
          <p>👨‍👩‍👦️</p> 
          <Form>
            <h1>Faça login</h1>

            <input name="email" icon={FiMail} placeholder="E-mail" />

            <input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>

            <a href="forgot">Esqueci minha senha</a>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
    );
  }
}

export default withRouter(SignIn);