import React from "react";
import { range } from "../../utils";

/*
<div class="guess-results">
  <p class="guess">FIRST</p>
  <p class="guess">GUESS</p>
</div>
*/

function GuessResults({ guesses, numOfGuesses }) {
  return (
    <div className="guess-results">
      {range(0, numOfGuesses).map((index) => {
        const letters = guesses[index];

        return (
          <div key={index} className="guess">
            {range(0, 5).map((letterIndex) => {
              const letterThing = letters && letters[letterIndex];
              const letterClass = letterThing && letterThing.status;
              const letter = letterThing && letterThing.letter;

              return (
                <span key={letterIndex} className={`cell ${letterClass}`}>
                  {letter}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GuessResults;
