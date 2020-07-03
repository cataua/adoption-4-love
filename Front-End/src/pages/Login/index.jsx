import React from "react";
import { withRouter } from "react-router-dom";
// import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import Input from '../../components/Input';


import { Container, Content, AnimationContainer } from './styles';

const SignIn = () => {
  const handleSubmit = (data) => {
    //TODO -> faça api
    // nextStep();
    console.log(data)
  };

  return (
    <Container>
    <Content>
      <AnimationContainer>
        <h1 style={{marginTop: 30}}>HUMANIZE</h1>
        <p>👨‍👩‍👦️</p>
        <Form onSubmit={handleSubmit}>
          <h1>Faça login</h1>
          <Input name="email" placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
          <a href="/">Esqueci minha senha</a>
        </Form>
      </AnimationContainer>
    </Content>
  </Container>
  );
}

export default withRouter(SignIn);
