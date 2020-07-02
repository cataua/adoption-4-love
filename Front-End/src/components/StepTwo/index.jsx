import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepTwo = ({nextStep}) => {
  const [nextOfKin, setNextOfKin] = useState('');

  const handleSubmit = (data) => {
    //TODO -> faça api
    nextStep();
    console.log(data)
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre os membros da familia</h3>
          <p>👪</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <div>
                <Input
                  className=''
                  name="fullname"
                  placeholder='Nome completo'
                  type='text'
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className=''
                  name="birthday"
                  placeholder='Data de nascimento'
                  type='date'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  className=''
                  name="cpf"
                  placeholder='CPF'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <select placeholder='Grau de Parentesco' onChange={(e) => setNextOfKin(e.target.value)} icon={FiChevronDown} name="nextOfKin" id="nextOfKin">
                  <option value="" disabled selected>Grau de parentesco</option>
                  <option value={nextOfKin}>Cônjuge</option>
                  <option value={nextOfKin}>Filho(a)</option>
                </select>
              </div>
            </div>
           
            <button>ADICIONAR NOVO MEMBRO</button>
            <button type="submit">PRÓXIMO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepTwo;