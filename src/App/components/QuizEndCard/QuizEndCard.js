import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'

export function QuizEndCard ({ score, retakeQuiz }) {
  return (
    <Grid container spacing={2} justifyContent='center' direction='column' style={{ minHeight: 535 }}>
      <Grid item>
        <Typography variant='h5' component='h2' align='center'>Thanks for taking quiz!</Typography>
      </Grid>
      <Grid item>
        <Typography color='textSecondary' align='center'>
          Your score: {score.score}
        </Typography>
      </Grid>
      <Grid item align='center'>
        <Button variant='outlined' onClick={retakeQuiz}>Retake Quiz</Button>
      </Grid>
    </Grid>
  )
}
