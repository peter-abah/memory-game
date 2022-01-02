import ScoreBoard from './ScoreBoard';

const Header = (props) => {
  return (
    <header>
      <h1>Memory Card</h1>
      <ScoreBoard {...props} />
    </header>
  );
};

export default Header;
