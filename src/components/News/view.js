import React from 'react'
import '../../styles/news.css'
import Navbar from '../Navbar'
import { Card, Button } from 'react-bootstrap'

export default function view(props) {
  const { news } = props
  const articlesOfNews = news.articles
  const article = articlesOfNews && articlesOfNews.map((singleArticle, i) => <div key={i} className='row'>

    <div className='col-12'>
      <Card className='single-article'>
        <Card.Header className='header-text'>{singleArticle.title}</Card.Header>
        <Card.Img className='news-image card-body' src={singleArticle.urlToImage} alt={singleArticle.title} />
        <Card.Body>
          <Card.Text className='blockquote-footer' >
            Source: {singleArticle.source.name}
          </Card.Text>
          <Card.Text>
            Description: {singleArticle.description}
          </Card.Text>
          <Button variant='outline-info'>
            <a href={singleArticle.url} className='link-news' target='_blank' rel='noreferrer noopener'>
              Read Further on official website
              </a>
          </Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">PublishedOn: {singleArticle.publishedAt.slice(0, 10)}</small>
        </Card.Footer>
      </Card>
    </div>
  </div>
  )
  return <div>
    <Navbar />
    <div className='news container'>
      {article}
    </div>
  </div>
}