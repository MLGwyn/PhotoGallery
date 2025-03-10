import React from 'react'
import { CategoryList } from './components/CategoryList'
import { PhotoList } from './components/PhotoList'
import { Route, Switch, Link } from 'wouter'
import { PhotoDetail } from './components/PhotoDetail'

export function App() {
  return (
    <div className="app">
      <header>
        <h1>
          <Link to="/">Melissa&apos;s Gallery of Interest </Link>
        </h1>
      </header>
      <main>
        <Switch>
          <Route path="/" component={CategoryList} />
          <Route path="/:slug" component={PhotoList} />
          <Route path="/:slug/:index" component={PhotoDetail} />
        </Switch>
      </main>
    </div>
  )
}
