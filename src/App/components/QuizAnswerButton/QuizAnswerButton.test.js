import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import QuizAnswerButton, { getClass } from './QuizAnswerButton'

const inCorrectAnswer = {
  text: 'Text',
  isCorrect: false
}

const correctAnswer = {
  text: 'Text',
  isCorrect: true
}

const classesMock = {
  isSelected: 'isSelected',
  isCorrectNotSelected: 'isCorrectNotSelected'
}

configure({ adapter: new Adapter() })

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<QuizAnswerButton answer={inCorrectAnswer} disabled={false}/>, div) // isSelected, answer, onSelect, disabled
  ReactDOM.unmountComponentAtNode(div)
})

it('getClass method return proper class', () => {
  let className = getClass(classesMock, true, true, correctAnswer);
  expect(className).toEqual('isSelected')

  className = getClass(classesMock, true, false, correctAnswer);
  expect(className).toEqual('isCorrectNotSelected')
})
