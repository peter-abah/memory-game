import Card from './Card';

const Cards = (props) => {
  const { items, handleClick } = props;
  return (
    <main className="cards">
      {items.map((item) => (
        <Card key={item.id} {...item} handleClick={handleClick} />
      ))}
    </main>
  );
};

export default Cards;
