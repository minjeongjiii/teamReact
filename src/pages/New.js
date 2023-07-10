import React from 'react'
import './Main.css';

export default function New () {
  return (
    <div>
      <h1>New Huntsman Collection</h1>
      <section className='new_item'>
        <img src={process.env.PUBLIC_URL + '/images/Huntsman_Scent.png'} alt='Huntsman_Scent'/>
      </section>
    </div>
  )
}
