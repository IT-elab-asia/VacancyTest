import React from 'react'
import './Coins.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {Link as NavLink} from 'react-router-dom'

const Header = () => {
    return(
        
        <Container style={{maxWidth: '100%', padding: 0, marginBottom: 50}} >
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">NAV</Navbar.Brand>
          <ul class="navbarrr">
              <li class="nav-item"><NavLink to='/'>Главная</NavLink></li>
              <li class="nav-item"><NavLink to='/login'>Профиль</NavLink></li>
          </ul>
        </Navbar>
      </Container>
    )
}

export default Header;