import rawData from '../data.json'
import React from 'react'
import { Link } from 'wouter'
import { CategoryListType, CategoryPropsType } from '../types'

const data: CategoryListType = rawData

function Category(props: CategoryPropsType) {
  return (
    <article className="interests">
      <h2 className="interest-title">
        <Link to={`/${props.slug}`}> {props.category.title} </Link>
      </h2>
      <p>{props.category.description}</p>
      <img src={props.category.photos[0].imageURL} />
    </article>
  )
}

export function CategoryList() {
  const slugs = Object.keys(data)
  return (
    <React.Fragment>
      <div>
        {slugs.map((cat) => (
          <Category key={cat} category={data[cat]} slug={cat} />
        ))}
      </div>
    </React.Fragment>
  )
}
