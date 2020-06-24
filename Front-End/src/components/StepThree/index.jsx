import React, { useState } from 'react'

export default () => {
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');

  return (
    <div>
      <h3>Cadastre seu endereço</h3>
      <div className='row'>
        <div className='six columns'>
          <label>Rua</label>
          <input
            className='u-full-width required'
            placeholder='Rua Imaginária'
            type='text'
            onChange={e => setStreet(e.target.value)}
            value={street}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Número</label>
          <input
            className='u-full-width'
            placeholder='1020'
            type='text'
            onChange={e => setNumber(e.target.value)}
            value={number}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Complemento</label>
          <input
            className='u-full-width'
            placeholder='Apartamento 12B'
            type='text'
            onChange={e => setComplement(e.target.value)}
            value={complement}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Cidade</label>
          <input
            className='u-full-width'
            placeholder='São Paulo'
            type='text'
            onChange={e => setCity(e.target.value)}
            value={city}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Estado</label>
          <input
            className='u-full-width'
            placeholder='São Paulo'
            type='text'
            onChange={e => setState(e.target.value)}
            value={state}
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>CEP</label>
          <input
            className='u-full-width'
            placeholder='08689-045'
            type='text'
            onChange={e => setCep(e.target.value)}
            value={cep}
          />
        </div>
      </div>

    </div>
  )
}