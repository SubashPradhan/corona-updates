import React from 'react'
import '../../styles/news.css'
import Navbar from '../Navbar'
import { Card, Row, Col, Button } from 'react-bootstrap'

export default function view(props) {
  const { news } = props
  console.log("Props", props)
  console.log("PROPSNEWS", news)
  const article = news.map((singleArticle, i) => <Row key={i}>

    <Col xs='12' lg='12'>
      <Card className='single-article'>
        <Card.Header>{singleArticle.title}</Card.Header>
        <Card.Img className='news-image card-body' src={singleArticle.urlToImage} alt={singleArticle.title} />
        <Card.Body>
          <Card.Text className='blockquote-footer' >
            Source: {singleArticle.source.name}
          </Card.Text>
          <Card.Text>
            Description: {singleArticle.description}
          </Card.Text>
          <Button variant="primary">Go to the website</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">PublishedAt: {singleArticle.publishedAt.slice(0, 10)}</small>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
  )
  return <div >
    <Navbar />
    <div className='news container'>
      {article}
    </div>
  </div>
}