import React from 'react'
import { Form } from '@unform/web';

import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepOne = ({nextStep}) => {
  const handleSubmit = (data) => {
    //TODO -> faça api
    nextStep();
    console.log(data)
  };

 return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre e-mail e senha</h3>
          <p>✉️</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <div>
                <Input
                  placeholder='meu@email.com'
                  name='email'
                  id="email"
                  type='email'
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="password"
                  id="password"
                  placeholder='Digite sua senha'
                  type='password'
                />
              </div>
            </div>
            <button type="submit">PRÓXIMO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepOne;