import React from 'react'
import './Main.css';
/* styled-components */
import styled from 'styled-components'


const NoticeBoxWarp =  styled.div`
  display: flex;
  width: 1300px;
  height: 450px;
  margin: 5px auto 50px
`
const NoticeBox =  styled.div`
  width: 33.333%;
  height: 100%;
  font-family: "Pretendard Variable";
  cursor: pointer;
`
const NoticeText =  styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 30px 40px 0px;
`


export default function Notice() {
  return (
    <NoticeBoxWarp>
      <NoticeBox>
        <div><img src={process.env.PUBLIC_URL + '/images/notice_01.png'} alt='img'/></div>
        <NoticeText>
          <h3>조말론 멤버십</h3>
          <p>조말론 회원만이 누릴 수 있는 다양하고, <br/>풍성한 혜택을 지금 만나 보세요.</p>
        </NoticeText>
      </NoticeBox>
      <NoticeBox>
        <div><img src={process.env.PUBLIC_URL + '/images/notice_02.png'} alt='img'/></div>
        <NoticeText>
          <h3>매장 안내</h3>
          <p>가장 가까운 매장 정보를 확인해 보세요!</p>
        </NoticeText>
      </NoticeBox>
      <NoticeBox>
        <div><img src={process.env.PUBLIC_URL + '/images/notice_03.png'} alt='img'/></div>
        <NoticeText>
          <h3>선물 포장</h3>
          <p>시그니처 박스에 정성스럽게 포장해 드립니다.</p>
        </NoticeText>
      </NoticeBox>
    </NoticeBoxWarp>
  )
}
