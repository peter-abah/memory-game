import { useState } from 'react';

import './scss/main.scss';

import Header from './components/Header';
import Info from './components/Info';
import Cards from './components/Cards'

import data from './data'
import { shuffleArray } from './helpers';

const App = () => {
  const items = data;
  const [clickedItems, setClickedItems] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

    if ((items.length - clickedItems.length) === 1) reset();
  };

  const shuffledItems = shuffleArray(items);
  return (
    <div>
      <Header score={score} highScore={highScore}/>
      <Info />
      <Cards items={shuffledItems} handleClick={handleClick}/>
    </div>
  )
}

export default App;
