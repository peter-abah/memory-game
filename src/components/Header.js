import ScoreBoard from './ScoreBoard';

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header__title">Memory Card</h1>
      <ScoreBoard {...props} />
    </header>
  );
};

export default Header;
