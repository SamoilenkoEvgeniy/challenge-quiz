import React, { useCallback, useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Container, Grid, LinearProgress, Typography } from '@material-ui/core'

import QuizQuestion from './components/QuizQuestion/QuizQuestion'
import LabeledProgress from './components/LabeledProgress/LabeledProgress'
import { QuizEndCard } from './components/QuizEndCard/QuizEndCard'

const defaultScore = { score: 0, maxScore: 0, minScore: 0 };

function App ({ questions }) {
  const [answerStatistics, setAnswerStatistics] = useState(defaultScore);
  const [countAnsweredQuestions, setCountAnsweredQuestions] = useState(0)
  const [isQuizFinished, setIsQuizFinished] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [countQuestions, setCountQuestions] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState({})

  const [question, setQuestion] = useState(null)
  const [progress, setProgress] = useState(0)

  const questionChange = (question) => {
    const newCurrentQuestion = currentQuestion + 1
    const progress = parseFloat(((newCurrentQuestion / countQuestions) * 100).toFixed(2))

    setQuestion(question)
    setProgress(progress)
    setCurrentAnswer({})
    setCurrentQuestion(newCurrentQuestion)
    setCountAnsweredQuestions(newCurrentQuestion)
  }

  const getAnswerStatus = useCallback((currentAnswer) => currentAnswer.isCorrect ? 'Correct!' : 'Sorry!', [])

  const nextQuestionCallback = () => {
    if (currentQuestion === countQuestions) {
      setIsQuizFinished(true)
      return
    }
    questionChange(questions.default[currentQuestion])

    const incrementer = currentAnswer.isCorrect ? 1 : 0
    const currentCorrectAnswers = correctAnswers + incrementer
    const minScore = parseInt((currentCorrectAnswers / countQuestions) * 100)
    const maxScore = parseInt((countAnsweredQuestions / countQuestions) * 100)
    const score = parseInt(((currentCorrectAnswers / countAnsweredQuestions) * 100))

    setCorrectAnswers(currentCorrectAnswers)
    setAnswerStatistics({
      score: score < maxScore ? score : maxScore,
      maxScore: maxScore,
      minScore: minScore
    })
  }

  const retakeQuiz = useCallback(() => {
    setAnswerStatistics(defaultScore)
    setCountAnsweredQuestions(0)
    setIsQuizFinished(false)
    setCorrectAnswers(0)
    setCurrentAnswer({})

    questionChange(questions.default[0])
  }, [])

  useEffect(() => {
    questionChange(questions.default[0])
    setCountQuestions(questions.default.length)
  }, [questions.default])

  return (
    <Container maxWidth='lg'>
      <Card variant='outlined' style={{ minHeight: 535 }}>
        <LinearProgress variant='determinate' value={progress} />
        <Box p={5}>
          {isQuizFinished ? <QuizEndCard score={answerStatistics} retakeQuiz={retakeQuiz} /> : (
            <CardContent>
              {question ? <QuizQuestion
                totalQuestions={countQuestions}
                currentQuestion={currentQuestion}
                answerSelected={answer => setCurrentAnswer(answer)}
                quizQuestion={question}
              /> : null}

              <Box mt={4} mb={4} justifyContent='center' textAlign='center' style={{ minHeight: 100 }}>
                {currentAnswer.text
                  ? <Grid container spacing={2} justifyContent='center' direction='column'>
                    <Grid item>
                      <Typography
                        variant='h5'
                        component='h2'
                        align='center'
                        mb={2}
                      >{getAnswerStatus(currentAnswer)}</Typography>
                    </Grid>
                    <Grid item>
                      <Button variant='outlined' onClick={nextQuestionCallback}>Next Question</Button>
                    </Grid>
                  </Grid>
                  : null
                }
              </Box>

              <LabeledProgress
                score={answerStatistics.score}
                maxScore={answerStatistics.maxScore}
                minScore={answerStatistics.minScore}
              />
            </CardContent>
          )}
        </Box>
      </Card>
    </Container>
  )
}

export default App
