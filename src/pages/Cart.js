import React from 'react'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, addCount, subCount } from './store'

export default function Cart() {
  const state = useSelector((state)=>state) 
  const dispatch = useDispatch()
  const totalPrice = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.count;
    });
    return formatPrice(total);
  }; // 장바구니 총 합계
  const totalItems = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.count;
    });
    return formatPrice(total);
  }; // 장바구니에 담긴 상품 수량
  const formatPrice = (price) => {
    return price.toLocaleString();
  }; // 천 단위 콤마 표현
  return (
    <div className='container_cart'>
      <h2>CART</h2>
      <p>장바구니 내역을 확인해주세요.</p>
      <div className='cart_wrap'>
        <ul className='cart_list'>
          {
            state.cart.map((item,i) => {
              return (
                <li className='cart_add' key={i}>
                  <div className='img_wrap'><img src={state.cart[i].src} alt='item_img' /></div>
                  <div>
                    <p>{state.cart[i].name_ko}</p>
                    <p>￦ {formatPrice(item.price * item.count)}</p>
                    <div className='count'>
                      <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                      <p>{state.cart[i].count}</p>
                      <button onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                    </div>
                  </div>
                  <div><button onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button></div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <ul style={{display:'flex'}}>
        <li>
          <strong>장바구니에 담긴 수량 :</strong>
        </li>
        <li>{totalItems()}</li>
        <li>
          <strong>총 합계 :</strong>
        </li>
        <li>￦ {totalPrice()}</li>
      </ul>
    </div>
  )
}

