import React from 'react'
/* bootstrap */
import Nav from 'react-bootstrap/Nav'
/* Router */
import {useNavigate, Outlet} from 'react-router-dom';

export default function Shop() {
  const navigate = useNavigate()
  return (
    <div>
      <Nav className='sub_nav'>
        <Nav.Item>
          <Nav.Link style={{color:'green'}} onClick={()=>{navigate('/shop')}}>Cologne</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:'green'}} onClick={()=>{navigate('/shop/bnb')}}>Bath & Body</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:'green'}} onClick={()=>{navigate('/shop/home')}} eventKey="link-2">Home Fragrance</Nav.Link>
        </Nav.Item>
      </Nav>
      <Outlet></Outlet>
    </div> 
  )
}