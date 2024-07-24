import React from 'react'
import rawData from '../data2.json'
import { Link, useParams } from 'wouter'
import { CategoryListType } from '../types'

const data: CategoryListType = rawData

export function PhotoList() {
  const params = useParams()
  const cat = params.slug && data[params.slug]
  if (!cat) {
    return <h2>Womp Womp</h2>
  }
  return (
    <>
      <h2>{cat.title}</h2>
      <span>{cat.description}</span>
      <ul>
        {cat.photos.map(function (photoDetail, index) {
          return (
            <React.Fragment key={photoDetail.title}>
              <Link to={`${params.slug}/${index}`}>
                {photoDetail.title}
                <img src={photoDetail.imageURL} />
              </Link>
            </React.Fragment>
          )
        })}
      </ul>
    </>
  )
}
