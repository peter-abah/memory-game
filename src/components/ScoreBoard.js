const ScoreBoard = (props) => {
  const { score, highScore } = props;

  return (
    <div>
      <p>
        <span>Score:</span> <span>{score}</span>
      </p>
      <p>
        <span>High Score:</span> <span>{highScore}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
