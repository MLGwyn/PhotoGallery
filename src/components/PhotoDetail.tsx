import React from 'react'
import { PhotoDetailType } from '../App'

type PhotoDetailProps = {
  photoDetail: PhotoDetailType
}

export function PhotoDetail({
  photoDetail: { title, imageURL, sourceURL },
}: PhotoDetailProps) {
  return (
    <div className="photo-detail">
      <p>Home / Panda Bears / {title}</p>
      <h2>{title}</h2>
      <img>{imageURL}</img>
      <a>{sourceURL}</a>
    </div>
  )
}
