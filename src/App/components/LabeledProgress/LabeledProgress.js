import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { CustomProgressBar } from '../CustomProgressBar/CustomProgressBar'

function LabeledProgress ({ score, maxScore, minScore, ...rest }) {
  return (
    <Box>
      <Grid container justifyContent='space-between'>
        <Grid item>
          Score {score}%
        </Grid>
        <Grid item>
          Max Score {maxScore}%
        </Grid>
      </Grid>
      <CustomProgressBar actual={score} max={maxScore} min={minScore} />
    </Box>
  )
}

export default LabeledProgress;
