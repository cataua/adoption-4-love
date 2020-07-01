import React, { useState } from 'react'
import { Form } from '@unform/web';

import { Container, Content, AnimationContainer } from './styles';

const StepThree = () => {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre seu endereço</h3>
          <p>🏠</p>
          <Form>
            <div>
              <div>
                <input
                  className='u-full-width required'
                  placeholder='Rua'
                  type='text'
                  onChange={e => setStreet(e.target.value)}
                  value={street}
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className='u-full-width'
                  placeholder='Número'
                  type='text'
                  onChange={e => setNumber(e.target.value)}
                  value={number}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className='u-full-width'
                  placeholder='Complemento'
                  type='text'
                  onChange={e => setComplement(e.target.value)}
                  value={complement}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className='u-full-width'
                  placeholder='Cidade'
                  type='text'
                  onChange={e => setCity(e.target.value)}
                  value={city}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className='u-full-width'
                  placeholder='Estado'
                  type='text'
                  onChange={e => setState(e.target.value)}
                  value={state}
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className='u-full-width'
                  placeholder='CEP'
                  type='text'
                  onChange={e => setCep(e.target.value)}
                  value={cep}
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