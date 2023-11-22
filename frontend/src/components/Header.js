import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: '#B12F3F',
    color: 'white',
};

const Header = (props) => {
    return (
       
        <Navbar style={navbarStyle} data-bs-theme="light">
             <Container>
          <Navbar.Brand href="/" style={navbarStyle}>{props.title}</Navbar.Brand>
          </Container>
        </Navbar>
        
    )
};

export default Header;