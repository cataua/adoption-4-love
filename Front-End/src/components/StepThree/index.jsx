import React from 'react'
import { Form } from '@unform/web';
import api from '../../services/api';

import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepThree = ({nextStep, familyId}) => {

  const handleSubmit = (data) => {
    console.log(data, familyId);
    api.post('api/address', {
      ...data,
      family_id: familyId,
    }).then(response => {
      nextStep();
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }
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
                  name="number"
                  placeholder='Número'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="complement"
                  placeholder='Complemento'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="city"
                  placeholder='Cidade'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="state"
                  placeholder='Estado'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
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
