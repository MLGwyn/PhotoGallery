import axios from 'axios'
import React, { useState } from 'react'

type CategoryType = {
  title: string | undefined
  description: string
  photos: [
    {
      title: string
      imageURL: string
      sourceURL: string
    }
  ]
}

type CategoryProps = {
  category: CategoryType
}

export function CategoryList(props: CategoryProps) {
  const [categories, setCategories] = useState<CategoryType[]>([])
  async function loadCategories() {
    const response = await axios.get(
      '/Users/melissagwyn/sdg/PhotoGallery/src/data.json'
    )
    setCategories(response.data)
  }
  loadCategories()
  return (
    <React.Fragment>
      <div>
        <article className="interests">
          <h2 className="interest-title">{props.category.title}</h2>
          <p>{props.category.description}</p>
          <ul>
            {props.category.photos.map(function (photoDetail) {
              return (
                <React.Fragment key={photoDetail.title}>
                  <h3>{photoDetail.title}</h3>
                  <img src={photoDetail.imageURL} />{' '}
                  <a href={photoDetail.sourceURL}>Source</a>
                </React.Fragment>
              )
            })}
          </ul>
        </article>
      </div>
    </React.Fragment>
  )
}
