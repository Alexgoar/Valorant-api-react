import React from 'react'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

class Pigeon extends React.Component{
    render(){
        return(
            <>
            <Card style={{ width: '90%' }}>
                <Card.Header>Classement des pigeons</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pseudo</th>
                                    <th>Valorant</th>
                                    <th>Fortnite</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marteocom</td>
                                    <td>192</td>
                                    <td>-</td>
                                    <td>caca</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>caca</td>
                                    <td>caca</td>
                                    <td>caca</td>
                                    <td>caca</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>

            </>

        )
        
    }
}

export default Pigeon