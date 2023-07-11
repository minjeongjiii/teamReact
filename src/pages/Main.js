import React, { useState } from 'react'
import './Main.css';
import data from './BestData'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Main() {
  const dispatch = useDispatch()
  const [bests] = useState(data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedBest, setSelectedBest] = useState(null);
  const openModal = (best) => {
    setSelectedBest(best);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
   return (
    <div className='main_container'>
      <h1>Best seller</h1>
    <section className="best_seller">
      <div className="best_wrap">
        <div className="best_left"><img src={process.env.PUBLIC_URL + '/images/best_01.png'} alt="베스트셀러배경이미지"/></div>
        <div className="best_right">
          <ul>
              {
                bests.map((best) => {
                  return (
                    <li key={best.id}>
                      <img src={best.src} alt='img'/>
                      <p>{best.name_eng}</p>
                      <p>{best.name_ko}</p>
                      <button onClick={()=> openModal(best)}>미리보기</button>
                    </li>
                  )
                }) 
              }
          </ul>
        </div>
      </div>
    </section>
    <Modal className='Modal' isOpen={modalIsOpen} onRequestClose={closeModal} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'}}}>
        {selectedBest && (
          <div className='popup_inner'>
            <div>
              <img src={selectedBest.src} alt='img' />
            </div>
            <div>
              <p className='name'>{selectedBest.name_eng} <span className='name'>{selectedBest.name_ko}</span></p>
              <p>￦ {selectedBest.price}</p>
              <p>{selectedBest.scent}</p>
              <button className='popup_cart_btn' onClick={()=>{
                dispatch(addItem({
                  id: selectedBest.id,
                  src: selectedBest.src,
                  name_ko: selectedBest.name_ko,
                  price: selectedBest.price,
                  count: 1
                }))
              }}>add cart</button>
            </div>
          </div>

        )}
        <button className='popup_close_btn' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}
