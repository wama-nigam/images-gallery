import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
    backgroundColor: '#B12F3F',
    color: 'white',
};

const Header = ({ title }) => {
    return (
       
        <Navbar style={navbarStyle} data-bs-theme="light">
             <Container>
                <Logo alt={title} style={{maxWidth: '12rem' , maxHeight: '2.5rem'}}></Logo>
          </Container>
        </Navbar>
        
    )
};

export default Header;