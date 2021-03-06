import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-4 w-screen h-auto mt-20 h-auto'>
      <div className=' mx-auto text-center font-bold text-white abolute inset-x-0 bottom-0'>
        Projeto desenvolvido por: João Pedro / {' '}
        <a className='hover:underline ' href='https://www.linkedin.com/in/joão-pedro-cordeiro-a2b97319a/'>Linkedin</a> /{' '}
        <a className='hover:underline' href='https://github.com/5626pedro'>Github</a>
        <div className='mt-2'>
          <img className='p-4 inline' src='/logo_devpleno.png' />
          <img className='p-4 inline' src='/logo_semana_fsm.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer