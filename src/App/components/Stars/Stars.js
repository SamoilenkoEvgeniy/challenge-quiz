import React from 'react'

function Stars ({ difficulty }) {
  const getStars = () => {
    switch (difficulty) {
      case 'easy':
        return 1
      case 'medium':
        return 2
      case 'hard':
        return 3
      default:
        break
    }
  }
  return (
    <>{[...Array(getStars())].map((item, key) => <span aria-label='Star Emoji' role='img' key={`star${key}`}>&#11088;</span>)}</>
  )
}

export default Stars
