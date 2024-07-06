import React from 'react'
import data from '/Users/melissagwyn/sdg/PhotoGallery/src/data.json'

export function PhotoList() {
  return (
    <ul>
      {data.pandas.photos.map(function (photoDetail) {
        return (
          <React.Fragment key={photoDetail.title}>
            <p>{photoDetail.title}</p>
            <img src={photoDetail.imageURL} />{' '}
            <a href={photoDetail.sourceURL}>Source</a>
          </React.Fragment>
        )
      })}
    </ul>
  )
}
