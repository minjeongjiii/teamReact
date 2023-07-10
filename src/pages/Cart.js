import React from 'react'
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, addCount, subCount } from './store'
import Shop from './Shop';

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
  const discountPrice = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.count * 0.2;
    });
    return formatPrice(total);
  }; // 할인 금액
  const totalAmount = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.count * 0.8;
    });
    return formatPrice(total);
  }; // 할인된 결제금액
  const totalItems = () => {
    let total = 0;
    state.cart.forEach((item) => {
      total += item.count;
    });
    return total;
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
          <h5>Product</h5>
          {
            state.cart.map((item,i) => {
              return (
                <li className='cart_add' key={i}>
                  <div className='img_wrap'><img src={state.cart[i].src} alt='item_img' /></div>
                  <div>
                    <span className='item_name'>{state.cart[i].name_ko}</span>
                    <span className='item_price'>￦ {formatPrice(item.price * item.count)}</span>
                    <div className='count'>
                      <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                      <span>{state.cart[i].count}</span>
                      <button onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                    </div>
                  </div>
                  <div>
                    <button onClick={()=>dispatch(deleteItem(state.cart[i].id))}>
                      <img src={process.env.PUBLIC_URL + '/images/close.png'} alt='close' />
                    </button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className='cart_total'>
          <ul>
            <h5>Total</h5>
            <li>
              <span>주문금액</span><span>{totalPrice()} 원</span>
            </li>
            <li>
              <span>할인</span><span>{discountPrice()} 원</span>
            </li>
            <li>
              * 블랙베리 앤 베이 바디 크림 15ml 사은품 증정<br/>
              * 적립금 및 쿠폰할인은 다음단계에서 확인하실 수 있습니다
            </li>
            <li>
              <span>장바구니 선택 수량</span><span>{totalItems()}</span>
            </li>
            <li>
              <span>합계</span><span className='total_amount'>{totalAmount()}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>선물하기</span><span>선택상품 주문하기</span>
            </li>
            <li>
              <span>전체상품 주문하기</span>
            </li>
            <li>
              <span>
                <img src={process.env.PUBLIC_URL + '/images/icon_npay.png'} alt='icon_npay'/>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

