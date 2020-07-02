import React from 'react'
import { Form } from '@unform/web';

import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepThree = ({nextStep}) => {
  const handleSubmit = (data) => {
    //TODO -> faça api
    nextStep();
    console.log(data)
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre seu endereço</h3>
          <p>🏠</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <div>
                <Input
                  className='u-full-width required'
                  name="street"
                  placeholder='Rua'
                  type='text'
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className='u-full-width'
                  name="number"
                  placeholder='Número'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className='u-full-width'
                  name="complement"
                  placeholder='Complemento'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className='u-full-width'
                  name="city"
                  placeholder='Cidade'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className='u-full-width'
                  name="state"
                  placeholder='Estado'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className='u-full-width'
                  name="cep"
                  placeholder='CEP'
                  type='text'
                />
              </div>
            </div>
            <button type="submit">FINALIZAR CADASTRO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepThree;