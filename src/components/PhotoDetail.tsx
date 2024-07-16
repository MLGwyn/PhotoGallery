import React from 'react'
import rawData from '../data.json'
import { Link, useParams, useRoute } from 'wouter'
import { CategoryListType } from '../types'

const data: CategoryListType = rawData

export function PhotoDetail() {
  const params = useParams()
  const cat = params.slug && data[params.slug]
  const [match, param] = useRoute(`${params.slug}/:index`)
  if (!cat || !param) {
    return <h2>Womp Womp</h2>
  }
  if (match) {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>/<Link to={`/${params.slug}`}>{cat.title}</Link>
        /{cat.photos[parseInt(param.index)].title}
        <div className="photo-detail">
          <h2>{cat.photos[parseInt(param.index)].title}</h2>
          <img src={cat.photos[parseInt(param.index)].imageURL} />
          <a href={cat.photos[parseInt(param.index)].sourceURL}>Source</a>
        </div>
      </React.Fragment>
    )
  } else return <h2>Sowwwy</h2>
}
