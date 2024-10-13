import React from 'react'

export default function Row({ guess, currentGuess, length }) {

  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="filled">{letter}</div>
        ))}
        {[...Array(length - letters.length)].map((_,i) => (
          <div key={i}></div>
        ))}
      </div>
    )
  }

  return (
    //returns a number of divs based on how many letters are in the word
    <div className="row">
      {[...Array(length)].map((e, i) =>
        <div key={i}></div>
      )}
    </div>
  )
  
}
