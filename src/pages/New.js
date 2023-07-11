import React from 'react'
import './Main.css';
import styled from 'styled-components'

/* styled-components */
const NewItem =  styled.div`
  width: 1300px;
  height: 600px;
  margin: 0px auto 130px;
  margin-bottom: 5px;
`
const NewItemImg =  styled.img`
  width: 100%;
`
export default function New () {
  return (
    <div>
      <h1>New Huntsman Collection</h1>
      <NewItem>
        <NewItemImg src={process.env.PUBLIC_URL + '/images/Huntsman_Scent.png'} alt='Huntsman_Scent'/>
      </NewItem>
    </div>
  )
}
