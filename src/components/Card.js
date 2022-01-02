const Card = (props) => {
  const { id, image, title, handleClick } = props;
  return (
    <button className="card" data-id={id} onClick={handleClick}>
      <img className="card__img" src={image} alt={title} />
      <h3 className="card__title">{title}</h3>
    </button>
  );
};

export default Card;
