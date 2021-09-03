import React from 'react'
import ReactDOM from 'react-dom'

import Stars from './Stars'
import { render } from '@testing-library/react'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  ReactDOM.render(<Stars difficulty={2} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders 3 star when difficulty is hard', () => { // eslint-disable-line

  const { getAllByRole } = render(
    <Stars difficulty={'hard'} />
  )

  expect(getAllByRole('img').length).toEqual(3)
})
