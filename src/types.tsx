export type CategoryType = {
  title: string
  description: string
  photos: PhotoType[]
}
export type CategoryPropsType = {
  category: CategoryType
  slug: string
}

export type CategoryListType = {
  [key: string]: CategoryType
}

export type PhotoType = {
  title: string
  imageURL: string
  sourceURL: string
}
