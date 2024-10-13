import React from 'react'

// components
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn, length }) {
  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} length={length} />
        }
        return <Row key={i} guess={g} length={length} /> 
      })}
    </div>
  )
}
