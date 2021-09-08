import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  bar: {
    boxSizing: 'content-box',
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: 4,
    position: 'relative',
    height: 20
  },
  progress: {
    top: 0,
    display: 'block',
    height: 20,
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 4,

    '&:nth-child(1)': {
      zIndex: 100,
      backgroundColor: theme.palette.primary.dark
    },

    '&:nth-child(2)': {
      zIndex: 99,
      backgroundColor: theme.palette.primary.light
    },

    '&:nth-child(3)': {
      zIndex: 98,
      backgroundColor: theme.palette.secondary.dark
    }
  }
}))

export function CustomProgressBar ({ min, actual, max }) {
  const classes = useStyles()

  return (
    <div className={classes.bar}>
      <span className={classes.progress} style={{ width: `${min}%` }} />
      <span className={classes.progress} style={{ width: `${actual}%` }} />
      <span className={classes.progress} style={{ width: `${max}%` }} />
    </div>
  )
}
