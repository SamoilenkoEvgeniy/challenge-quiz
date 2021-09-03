import React from 'react'
import { Box, Grid, LinearProgress } from '@material-ui/core'

function LabeledProgress ({ score, maxScore, ...rest }) {
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
      <LinearProgress variant='determinate' value={score} {...rest} />
    </Box>
  )
}

export default LabeledProgress;
