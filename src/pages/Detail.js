import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'

/* styled-components */
const Wrap =  styled.div`
  width: 100%;
  height: auto;
  background-color: #FCF9EE;
`
const Inner =  styled.div`
  display: flex;
  width: 1300px;
  padding: 100px 0px;
  margin: 0px auto;
`
const ItemImg =  styled.div`
  width: 450px
`
const ItemTxt =  styled.div`
  width: 850px;
  padding-top: 50px
`
const Button = styled.button`
  width: 100px;
  height: 50px;
  color: #000;
  margin: 5px;
  background-color: ${(props)=>(props.enter ? '#555' : '#eee')};
  border-radius: 5px;
  &:hover {
    font-weight: 600;
    transition: all 0.3s
  }
`

export default function Detail(props) {
  const {items} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  return (
    <Wrap>
      <Inner>
        <ItemImg>
          <img src={items[id].src} alt='img' style={{width:100+'%'}}/>
        </ItemImg>
        <ItemTxt>
          <p>{items[id].name_ko}</p>
          <p>￦ {items[id].price}</p>
          <p>{items[id].gift}</p>
          <p>{items[id].scent}</p>
          <Button onClick={()=>{
            dispatch(addItem({id: items[id].id,name_ko: items[id].name_ko,count: 1
            }))
          }}>장바구니</Button>
        </ItemTxt>
      </Inner>
    </Wrap>
  )
}
