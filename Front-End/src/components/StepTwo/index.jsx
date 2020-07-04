import React, { useState } from 'react';
// import { FiChevronDown } from 'react-icons/fi';
import { Form } from '@unform/web';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../services/api';


import Input from '../Input';

import { Container, Content, AnimationContainer } from './styles';

const StepTwo = ({nextStep, familyId}) => {
  const [nextOfKin, setNextOfKin] = useState('Cônjuge');

  const notify = () => toast.success("Membro incluído!");

  const handleSubmit = (data, {reset}) => {
    api.post('api/member', {
      ...data,
      family_id: familyId,
      degree_of_kinship: nextOfKin,
    }).then(response => {
      reset();
      setNextOfKin('Cônjuge');

      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <ToastContainer/>
          <h3 style={{marginTop: 30}}>Cadastre os membros da familia</h3>
          <p>👪</p>
          <Form onSubmit={handleSubmit}>
            <div>
              <div>
                <Input
                  name="name"
                  placeholder='Nome completo'
                  type='text'
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="birth_date"
                  placeholder='Data de nascimento'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <Input
                  name="cpf"
                  placeholder='CPF'
                  type='text'
                />
              </div>
            </div>
            <div>
              <div>
                <select placeholder='Grau de Parentesco' onChange={(e) => setNextOfKin(e.target.value)} value={nextOfKin}>
                  <option value="Cônjuge">Cônjuge</option>
                  <option value="Filho(a)">Filho(a)</option>
                </select>
              </div>
            </div>
            <button type="submit" onClick={notify}>ADICIONAR NOVO MEMBRO</button>
            <button onClick={nextStep}>PRÓXIMO</button>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepTwo;
