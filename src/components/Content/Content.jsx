import React from 'react'
import { useSelector } from 'react-redux'
import {Card, Button, Row, Col, Container, Budge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Loader from '../Loader/Loader'

export default function Content() {
    const data = useSelector(photo=>photo.photos)
    const category1 = data.slice(0, 6)
    const category2 = data.slice(0, 6)
    const category3 = data.slice(0, 6)
    const category4 = data.slice(0, 6)  
    

    const categ1 = category1.map(item=>{
        const {id, thumbnail, title, url} = item;
        return (
            <Col key={id} xs={2}>
            <Link to={'/detail'+id} style={{ textDecoration: 'none' }}>
                <Card id={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
                </Card>
            </Link>
            </Col>
        )
    })
    const categ2 = category2.map(item=>{
        const {id, thumbnail, title, url} = item;
        return (
            <Col key={id} xs={2}>
            <Link to={'/detail'+id} style={{ textDecoration: 'none' }}>
                <Card id={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
                </Card>
            </Link>
            </Col>
        )
    })
    const categ3 = category3.map(item=>{
        const {id, thumbnail, title, url} = item;
        return (
            <Col key={id} xs={2}>
            <Link to={'/detail'+id} style={{ textDecoration: 'none' }}>
                <Card id={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
                </Card>
            </Link>
            </Col>
        )
    })
    const categ4 = category4.map(item=>{
        const {id, thumbnail, title, url} = item;
        return (
            <Col key={id} xs={2}>
            <Link to={'/detail'+id} style={{ textDecoration: 'none' }}>
                <Card id={id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Button variant="primary">Подробнее</Button>
                </Card.Body>
                </Card>
            </Link>
            </Col>
        )
    })
  return (
      <>
      {data.length
        ?   <Container fluid>
                <Row>
                    <Card.Title style={{textAlign: 'center'}}>Category 1</Card.Title>
                    {categ1}
                    <Card.Title style={{textAlign: 'center'}}>Category 2</Card.Title>
                    {categ2}
                    <Card.Title style={{textAlign: 'center'}}>Category 3</Card.Title>
                    {categ3}
                    <Card.Title style={{textAlign: 'center'}}>Category 4</Card.Title>
                    {categ4}
                </Row>
            </Container>
        : <Loader/>
      }
          
          
      </>
      
        
  )
}
