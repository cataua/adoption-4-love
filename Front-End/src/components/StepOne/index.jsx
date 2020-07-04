import React from 'react'
import { Form } from '@unform/web';
import api from '../../services/api';

import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepOne = ({ nextStep, handleChangeFamilyId }) => {

  const handleSubmit = (data) => {
    api.post('/api/family', data).then(response => {
      handleChangeFamilyId(response.data.family_id);
      nextStep();
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  };

 return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre e-mail e senha</h3>
          <p>✉️</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input
                placeholder='Digite seu e-mail'
                name='email'
                id="email"
                type='email'
                autoFocus
              />
            </div>
            <div>
              <Input
                name="password"
                id="password"
                placeholder='Digite sua senha'
                type='password'
              />
            </div>
            <div>
              <Input
                name="name"
                id="name"
                placeholder='Nome completo'
                type='text'
              />
            </div>
            <div>
              <Input
                name="cpf"
                id="cpf"
                placeholder='Digite seu CPF - Ex: 00000000000'
                type='text'
              />
            </div>
            <div>
              <Input
                name="birth_date"
                id="birth_date"
                placeholder='Data de Nascimento - Ex: 01/01/1990'
                type='text'
              />
            </div>
            <button type="submit">PRÓXIMO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepOne;
