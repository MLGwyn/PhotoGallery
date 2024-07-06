import React from 'react'
import data from '/Users/melissagwyn/sdg/PhotoGallery/src/data.json'
import { CategoryList } from './components/CategoryList'
import { PhotoList } from '/Users/melissagwyn/sdg/PhotoGallery/src/components/PhotoList'

export type PhotoDetailType = {
  title: string
  imageURL: string
  sourceURL: string
}

export function App() {
  const categoryListFromData = Object.values(data)
  return (
    <div className="app">
      <header>
        <h1> Melissa&apos;s Gallery of Interest </h1>
      </header>
      <main>{categoryListFromData}</main>
    </div>
  )
}
