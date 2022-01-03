const GameEnd = (props) => {
  const { handleClick } = props;

  return (
    <section className="game-end">
      <p>You Win. Play again?</p>
      <button className="btn" onClick={handleClick}>Yes!</button>
    </section>
  )
};

export default GameEnd;
