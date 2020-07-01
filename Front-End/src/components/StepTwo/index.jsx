import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, AnimationContainer } from './styles';

const StepTwo = () => {
  const [fullname, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre os membros da familia</h3>
          <p>👪</p>
          <Form>
            <div>
              <div>
                <input
                  className=''
                  name="nickname"
                  placeholder='Nome completo'
                  type='text'
                  onChange={e => setFullName(e.target.value)}
                  value={fullname}
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className=''
                  placeholder='Data de nascimento'
                  type='date'
                  onChange={e => setBirthday(e.target.value)}
                  value={birthday}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className=''
                  placeholder='CPF'
                  type='text'
                  onChange={e => setCpf(e.target.value)}
                  value={cpf}
                />
              </div>
            </div>
            <div>
              <div>
                <select placeholder='Grau de Parentesco' icon={FiChevronDown} name="nextOfKin" id="nextOfKin">
                  <option value="" disabled selected>Grau de parentesco</option>
                  <option value={nextOfKin}>Cônjuge</option>
                  <option value={nextOfKin}>Filho(a)</option>
                </select>
              </div>
            </div>
            <button type="submit">ADICIONAR NOVO MEMBRO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepTwo;