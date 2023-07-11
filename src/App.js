import './App.css';
import { useState } from 'react';
/* component */
import data from './pages/ProuductData'
import SlideBanner from './pages/SlideBanner';
import Video from './pages/Video';
import Main from './pages/Main';
import Shop from './pages/Shop';
import New from './pages/New';
import Detail from './pages/Detail';
import Cart from './pages/Cart'
import Footer from './pages/Footer';
/* bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Form, Nav, Navbar, Row, Col} from 'react-bootstrap';
/* Router */
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
/* redux function */
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './pages/store';


function App() {
  const navigate = useNavigate()
  const [items] = useState(data)
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Navbar expand="lg" className="nav bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand onClick={()=>{navigate('/')}}>
            <span className='logo'>JO MALONE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('new')}}>What's New</Nav.Link>
              <Nav.Link onClick={()=>{navigate('shop')}}>Shop</Nav.Link>
              <Nav.Link onClick={()=>{navigate('cart')}}>Cart</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
          <div className='container_div'>
            <Video/>
            <Main/>
            <New/>
          </div>
        } />
        <Route path='new' element={<New/>}/>
        <Route path='shop' element={<Shop/>}>
          <Route path='/shop' element={
            <div>
              <SlideBanner/>
              <Container>
                <Row>
                  {
                    items.map((item, index)=>{
                      return (
                        <Col key={index} className='itemBox'>
                          <Link to={`/detail/${index}`} style={{textDecoration:'none'}}>
                            <img className='itemImg' src={item.src} alt='img' style={{width:280}}/>
                            <h4 className='txt'>{item.name_ko}</h4>
                            <p className='txt'>￦ {item.price}</p>
                          </Link>
                          <button className='cartBtn' onClick={()=>{
                            dispatch(addItem({
                              id: item.id,
                              src: item.src,
                              name_ko: item.name_ko,
                              price: item.price,
                              count: 1
                            }))
                          }}>cart</button>
                        </Col>
                      )
                    })
                  }
                </Row>
             </Container>
            </div>
          }/>
        </Route>
        <Route path='/shop/bnb' element={
          <div>
            <Shop/>
            <div className='sub_container'>
              <h1>Body & Bath</h1>
            </div>
          </div>
        }/>
        <Route path='/shop/home' element={
          <div>
            <Shop/>
            <div className='sub_container'>
              <h1>Home Fragrance</h1>
            </div>
          </div>
        }/>
        <Route path='/detail/:id' element={<Detail items={items}/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
