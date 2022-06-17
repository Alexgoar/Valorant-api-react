import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from './img/valorant-logo.png'
import { Form, FormControl, Button } from 'react-bootstrap'

class Banner extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
        this.props.history.push('/historique')
    }

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
                <Form className="d-flex" onSubmit={this.handleSubmit}>
                    <FormControl
                    type="search" value={this.state.value} onChange={this.handleChange} placeholder="Pseudo#Tag"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>)
    }
}

export default Banner