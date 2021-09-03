import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  isSelected: {
    backgroundColor: 'black',
    color: 'white !important'
  },
  isCorrectNotSelected: {
    color: 'black !important'
  }
})

export function getClass (classes, disabled, isSelected, answer) {
  if (disabled && isSelected) return classes.isSelected
  if (disabled && !isSelected && answer.isCorrect) return classes.isCorrectNotSelected
}

function QuizAnswerButton ({ isSelected, answer, onSelect, disabled }) {
  const classes = useStyles()

  return (
    <Button
      fullWidth
      variant='outlined'
      onClick={() => onSelect(answer)}
      disabled={disabled}
      classes={{ root: getClass(classes, disabled, isSelected, answer) }}
    >{answer.text}</Button>
  )
}

export default QuizAnswerButton
