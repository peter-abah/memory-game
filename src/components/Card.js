const Card = (props) => {
  const { id, image, title, handleClick } = props;
  return (
    <button className="card" data-id={id} onClick={handleClick}>
      <img className="card__img" src={image} alt={title} />
      <h2 className="card__title">{title}</h2>
    </button>
  );
};

export default Card;
