import React from "react";
import "./joke.css";

function Joke({ joke, changeVote }) {

  const getEmoji = () => {
    if (joke.votes >= 5) {
      return "🤣";
    } else if (joke.votes >= 4) {
      return "😃";
    } else if (joke.votes >= 3) {
      return "😄";
    } else if (joke.votes >= 2) {
      return "😆";
    } else if (joke.votes >= 1) {
      return "😁";
    } else if (joke.votes >= 0) {
      return "🙂";
    } else {
      return "😕";
    }
  };

  return (
    <div className="Joke">
      <div className="JokeButtons">
        <button
          className="fas fa-arrow-down"
          onClick={() => changeVote(joke.id, joke.votes + 1)}
        >
        👍🏻
        </button>
        <span className="JokeVotes" >
          {joke.votes}
        </span>
        <button
          className="fas fa-arrow-down"
          onClick={() => changeVote(joke.id, joke.votes - 1)}
        >
        👎🏻
        </button>
      </div>
      <div className="JokeText">{joke.text}</div>
      <div className="JokeSmiley">
        {/* <i className={getEmoji()} /> */}
        <div> {getEmoji()}</div>
      </div>
    </div>
  );
}

export default Joke;
