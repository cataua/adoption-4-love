import React, { useState } from 'react'

export default () => {
  const [fullname, setFullName] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');

  return (
    <div>
      <h3>Cadastre os membros <br/> da familia</h3>
      <div className='row'>
        <div className='six columns'>
          <label>Nome completo</label>
          <input
            className='u-full-width'
            placeholder='Nome completo'
            type='text'
            onChange={e => setFullName(e.target.value)}
            value={fullname}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>CPF</label>
          <input
            className='u-full-width'
            placeholder='CPF'
            type='text'
            onChange={e => setCpf(e.target.value)}
            value={cpf}
          />
        </div>
      </div>

      <div className='row'>
        <div className='six columns'>
          <label>Data de nascimento</label>
          <input
            className='u-full-width'
            placeholder='Data de nascimento'
            type='text'
            onChange={e => setBirthday(e.target.value)}
            value={birthday}
          />
        </div>
      </div>

      <div className='row'>
        <div className='six columns'>
          <label>Grau de parentesco</label>
          <input
            className='u-full-width'
            placeholder='Grau de parentesco'
            type='text'
            onChange={e => setNextOfKin(e.target.value)}
            value={nextOfKin}
          />
        </div>
      </div>

      <button>ADICIONAR NOVO MEMBRO</button>
    </div>
  )
}
