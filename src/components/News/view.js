import React from 'react'
import '../../styles/news.css'

export default function view(props) {
  const { news } = props
  console.log("Props", props)
  console.log("PROPSNEWS", news)
  const article = news.map((singleArticle, i) => <div key={i}>
    <div className='single-article'>
      <img className="newsImg" src={singleArticle.urlToImage}  alt={singleArticle.title}/>
      <p>AUTHOR: {singleArticle.author}/</p>
      <p>TITLE: {singleArticle.title}</p>
      <p>DESCRIPTION: {singleArticle.description}</p>
      <div>{singleArticle.content}/</div>
    </div>
  </div>)
  return <div align='center' className='container news  '>
    {article}
  </div>
}