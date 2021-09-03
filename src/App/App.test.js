import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as questions from '../questions.json'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<App questions={questions} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
