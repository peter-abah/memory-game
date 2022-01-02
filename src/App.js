import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards'
import uniqid from 'uniqid';

const items = [
    { title: 'big', id: uniqid() },
    { title: 'small', id: uniqid() },
    { title: 'medium', id: uniqid() },
    { title: 'large', id: uniqid() },
    { title: 'xxl', id: uniqid() },
  ];

const App = () => {
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

  return (
    <div>
      <Header score={score} highScore={highScore}/>
      <Cards items={items} handleClick={handleClick}/>
    </div>
  )
}

export default App;
