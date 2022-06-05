import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Loader from '../Loader/Loader'

export default function Detail() {
    const { detailID } = useParams()
    const [data, setData] = useState([]);
    
    const photoDetail = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos/'+detailID).catch((e)=>console.log(e))
    setData(res.data)
    }
    useEffect(()=>{
        photoDetail()
    }, [])
    const content = () => (
        <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:20}}>
            <Card style={{ width: '45rem'}}>
            <Card.Img variant="top" src={data.url} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    Подробность о картинке должна быть здесь
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
    )
  return (
    <>
        {data.title
            ?  content()
            :  <Loader/>
        }
    </>
  )
}
