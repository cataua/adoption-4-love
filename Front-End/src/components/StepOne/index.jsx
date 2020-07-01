import React, { useState } from 'react'
import { Form } from '@unform/web';

import { Container, Content, AnimationContainer } from './styles';

const StepOne = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <h3 style={{marginTop: 30}}>Cadastre e-mail e senha</h3>
          <p>✉️</p>
          <Form>
            <div>
              <div>
                <input
                  className=''
                  placeholder='meu@email.com'
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  autoFocus
                />
              </div>
            </div>
            <div>
              <div>
                <input
                  className=''
                  placeholder='Digite sua senha'
                  type='password'
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  )
}

export default StepOne;