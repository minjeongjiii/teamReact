import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'

/* styled-components */
const Wrap =  styled.div`
    background-color: #FCFAEE;
    height: auto;
`


export default function Detail(props) {
  const {items} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  return (
    <Wrap>
      <img src={items[id].src} alt='img' style={{width:280}}/>
      <p>{items[id].name_ko}</p>
      <p>￦ {items[id].price}</p>
      <button onClick={()=>{
        dispatch(addItem({id: items[id].id,name_ko: items[id].name_ko,count: 1
        }))
      }}>장바구니</button>
    </Wrap>
  )
}
