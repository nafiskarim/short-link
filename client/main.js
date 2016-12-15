import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <h1>hello short link</h1>
    </div>
  )
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'))
})
