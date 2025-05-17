import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Banner from "../Banner/index.js";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(undefined);

  function addGuess(guess) {
    const newGuesses = [...guesses];

    newGuesses.push(checkGuess(guess, answer));
    setGuesses(newGuesses);

    if (guess === answer) {
      setGameOver(true);
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(false);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} numOfGuesses={NUM_OF_GUESSES_ALLOWED} />
      <GuessInput addGuess={addGuess} />
      {gameOver !== undefined && (
        <Banner guesses={guesses} won={gameOver} answer={answer} />
      )}
    </>
  );
}

export default Game;
