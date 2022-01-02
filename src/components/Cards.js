import Card from './Card';

const Cards = (props) => {
  const { items, handleClick } = props;
  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} {...item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;