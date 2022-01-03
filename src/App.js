import { useState } from 'react';

import './scss/main.scss';

import Header from './components/Header';
import Info from './components/Info';
import Cards from './components/Cards';
import GameEnd from './components/GameEnd';

import data from './data'
import { shuffleArray } from './helpers';

const App = () => {
  const items = data;
  const [clickedItems, setClickedItems] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const reset = () => {
    setScore(0);
    setClickedItems([]);
  }

  const hasItemBeenClicked = (itemId) => {
    return clickedItems.some((e) => e.id === itemId);
  };

  const handleClick = (e) => {
    const { id } = e.currentTarget.dataset;
    if (hasItemBeenClicked(id)) {
      reset();
      return;
    }

    setScore(score + 1);
    if (score === highScore) setHighScore(score + 1);

    const item = items.filter((e) => e.id === id)[0];
    setClickedItems([...clickedItems, item]);

    if ((items.length - clickedItems.length) === 1) setGameOver(true);
  };

  const playAgain = () => {
    setScore(0);
    setClickedItems([]);
    setGameOver(false);
  };

  const shuffledItems = shuffleArray(items);
  return (
    <div>
      <Header score={score} highScore={highScore}/>
      {gameOver ? 
        <GameEnd handleClick={playAgain} />
      :
        (
          <div>
            <Info />
            <Cards items={shuffledItems} handleClick={handleClick} />
          </div>
        )
      }
    </div>
  )
}

export default App;
