import React from 'react';

function GuessInput({ addGuess }) {
  const [word, setWord] = React.useState('');

  function onSubmit(event) {
    event.preventDefault();
    addGuess(word);
    setWord('')
  }
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" required value={word} pattern="[A-Za-z]{5}" maxLength={5} onChange={event => {
        setWord(event.target.value.toUpperCase())
      }} />
    </form>
  )
}

export default GuessInput;
