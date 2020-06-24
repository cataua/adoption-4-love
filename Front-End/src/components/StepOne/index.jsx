import React, { useState } from 'react'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h3>Cadastre seu e-mail</h3>
      <div className='row'>
        <div className='six columns'>
          <label>E-mail</label>
          <input
            className='u-full-width required'
            placeholder='meu@email.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Senha</label>
          <input
            className='u-full-width'
            placeholder='Digite sua senha'
            type='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>
      </div>
    </div>
  )
}