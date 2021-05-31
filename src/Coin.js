import React from 'react'
import './Coins.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

const Coin = ({ title, url }) => {
    return(
        
        <Card style={{width: '80%'}}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
    )
}

export default Coin;