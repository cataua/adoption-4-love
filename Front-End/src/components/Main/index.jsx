import React from 'react';
import Container from 'react-bootstrap/Container';
import {Card, CardDeck} from 'react-bootstrap';

import family01 from '../../assets/img/family01.jpg'
import family02 from '../../assets/img/family02.jpg'
import family03 from '../../assets/img/family03.jpg'

import './styles.scss';

const Main = () => {
  return (
    <Container>
      <CardDeck style={{marginTop: 60}}>
        <Card>
          <Card.Img variant="top" src={family01}/>
          <Card.Body>
            <Card.Title>Comece uma família</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos, 
              illum architecto quaerat obcaecati aliquam quos accusantium rerum cumque vitae.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Última atualização há 3 mins</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={family02}/>
          <Card.Body>
            <Card.Title>Comece uma família</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos, 
              illum architecto quaerat obcaecati aliquam quos accusantium rerum cumque vitae.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Última atualização há 3 mins</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={family03}/>
          <Card.Body>
            <Card.Title>Comece uma família</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos, 
              illum architecto quaerat obcaecati aliquam quos accusantium rerum cumque vitae.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Última atualização há 3 mins</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  )
}

export default Main;