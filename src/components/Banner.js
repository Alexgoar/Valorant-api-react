import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from './img/valorant-logo.png'

class Banner extends React.Component{
    render(){
        return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                Valorant API
                </Navbar.Brand>
            </Container>
        </Navbar>)
    }
}

export default Banner