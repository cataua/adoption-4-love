import React, { useState } from 'react'

export default () => {
  const [checked, setChecked] = useState('')

  return (
    <div>
      <h3>Leia os termos de aceite</h3>
      <div className='row'>
        <div className='ten columns terms'>
          <span>Ao clicar em "Aceito" eu concordo que:</span>
          <ul className='docs-terms'>
            <li>
              Eu li e concordo com <a href='#'>Termo de Acordo</a>
            </li>
            <li>
              Eu li e concordo com e <a href='#'>Politica de Privacidade</a>
            </li>
            <li>Eu sou maior de 18 anos</li>
          </ul>
          <label>
            <input
              type='checkbox'
              checked={checked}
              onChange={e => setChecked(e.target.value)}
              autoFocus
            />
            <span> Aceito </span>{' '}
          </label>
        </div>
      </div>
    </div>
  )
}