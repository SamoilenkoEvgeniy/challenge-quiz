import { Grid, Typography } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'

import Stars from '../Stars/Stars'
import QuizAnswerButton from '../QuizAnswerButton/QuizAnswerButton'

const EMPTY_ANSWER = { text: '', isCorrect: false }

function QuizQuestion ({ currentQuestion, totalQuestions, quizQuestion, answerSelected }) {
  const [answer, setAnswer] = useState(EMPTY_ANSWER)
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState('')
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')

  const transformAnswer = useCallback((answer, isCorrect) => ({
    text: decodeURIComponent(answer),
    sort: Math.random(),
    isCorrect
  }), [])

  const onSelectAnswer = useCallback((answer) => {
    setAnswer(answer)
    answerSelected(answer)
  }, [])

  useEffect(() => {
    setAnswer(EMPTY_ANSWER)
    setDifficulty(quizQuestion.difficulty)
    setQuestion(decodeURIComponent(quizQuestion.question))
    setCategory(decodeURIComponent(quizQuestion.category))

    setAnswers([
      transformAnswer(quizQuestion.correct_answer, true),
      ...quizQuestion.incorrect_answers.map(answer => transformAnswer(answer, false))
    ].sort((a, b) => a.sort - b.sort))
  }, [quizQuestion, transformAnswer])

  return (
    <>
      <Typography variant='h5' component='h2'>Question {currentQuestion} of {totalQuestions}</Typography>
      <Typography color='textSecondary'>
        {category}
      </Typography>
      <Stars difficulty={difficulty} />

      <Typography variant='body2' paragraph>
        {question}
      </Typography>

      <Grid
        container
        spacing={4}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        {answers.map((answerItem, answerIndex) =>
          <Grid key={`answer${answerIndex}`} item xs={6}>
            <QuizAnswerButton
              answer={answerItem}
              disabled={!!answer.text.length}
              onSelect={onSelectAnswer}
              isSelected={answer.text === answerItem.text}
            />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default QuizQuestion
