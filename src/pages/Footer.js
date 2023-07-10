import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer_wrap">
    <footer className="footer">
      <ul className="footer_left">
        <li>
          <span>고객서비스</span>
          <span>회사소개</span>
          <span>소셜 네트워크</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
        </li>
        <li>
          <p>이엘씨에이한국(유) 대표: Teng, Hsiao-Hua(Catherine), 서울시 강남구 강남대로 382 역삼동 메리츠타워, 06232</p>
        </li>
        <li>
          <span>사업자등록번호: 211-81-71889</span>
          <span>통신판매업신고번호: 강남-15737호</span>
          <span>사업자정보조회</span>
        </li>
        <li>
          <span>고객관리지원팀: (02)6971-3228</span>
          <span>consumercare-kr@jomalone.com</span>
        </li>
        <li>
          <p>호스팅서비스 사업자: (주)엘지유플러스</p>
        </li>
        <li>
          <span>(c) Jo Malone London 2021</span>
          <span>대한민국</span>
        </li>
      </ul>
      <ul className="footer_menu me01">
        <li>자주 묻는 질문</li>
        <li>고객관리지원팀</li>
        <li>나의 프로필</li>
        <li>나의 오더</li>
        <li>주문 조회</li>
        <li>교환 및 환불 규정</li>
        <li>온라인 부티크 쇼핑</li>
      </ul>
      <ul className="footer_menu me02">
        <li>법인정보</li>
        <li>커리어</li>
      </ul>
      <ul className="footer_menu me03">
        <li>인스타</li>
        <li>페이스북</li>
        <li>유튜브</li>
      </ul>
      <div className="footer_right">
        <ul className="txt_box">
          <li>JO MALONE</li>
          <li>LONDON</li>
          <li>GUARANTEED AUTHENTIC</li>
        </ul>
        <p>공식 온라인몰</p>
        <ul className="sns_img">
          <li><img src={process.env.PUBLIC_URL + '/images/sns_insta.png'} alt="sns_img"/></li>
          <li><img src={process.env.PUBLIC_URL + '/images/sns_facebook.png'} alt="sns_img"/></li>
          <li><img src={process.env.PUBLIC_URL + '/images/sns_youtube.png'} alt="sns_img"/></li>
        </ul>
      </div>
    </footer>
  </div>
  )
}



