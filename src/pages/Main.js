import React, { useState } from 'react'
import './Main.css';
import data from './BestData'
import Modal from 'react-modal';

export default function Main() {
  const [bests] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  return (
    <div className='main_container'>
      <h1>Best seller</h1>
    <section className="best_seller">
      <div className="best_wrap">
        <div className="best_left"><img src="./images/best_01.png" alt="베스트셀러배경이미지"/></div>
        <div className="best_right">
          <ul className="best_right_top">
            <li>
              <img src="./images/best_02.png" alt="미니럭셔리즈"/>
              <p>{bests[0].name_eng}</p>
              <p>{bests[0].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
            <li>
              <img src="./images/best_03.png" alt="블랙베리앤베이코롱"/>
              <p>{bests[1].name_eng}</p>
              <p>{bests[0].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
            <li>
              <img src="./images/best_04.png" alt="바닐라앤아니스코롱"/>
              <p>{bests[2].name_eng}</p>
              <p>{bests[2].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
          </ul>
          <ul className="best_right_bottom">
            <li>
              <img src="./images/best_05.png" alt="와일드블루벨바디앤핸드워시"/>
              <p>{bests[3].name_eng}</p>
              <p>{bests[3].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
            <li>
              <img src="./images/best_06.png" alt="화이트자스민앤민트코롱"/>
              <p>{bests[4].name_eng}</p>
              <p>{bests[4].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
            <li>
              <img src="./images/best_07.png" alt="미니럭셔리즈"/>
              <p>{bests[5].name_eng}</p>
              <p>{bests[5].name_ko}</p>
              <button onClick={()=> setModalIsOpen(true)}>미리보기</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Modal className='Modal' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      {selectedItem && (
        <div>
          <img src={selectedItem.src} alt="img" style={{ width: 180 }} />
          <p>{selectedItem.name_eng}</p>
          <p>{selectedItem.name_ko}</p>
        </div>
      )}
    </Modal>
    </div>
  )
}
