import React from "react";

function Banner({ guesses, won, answer }) {
  const bannerType = won ? "happy" : "sad";
  return (
    <div className={`banner ${bannerType}`}>
      {won ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guesses.length} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
