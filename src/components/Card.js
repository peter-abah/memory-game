const Card = (props) => {
  const { id, image, title, handleClick } = props;
  return (
    <button data-id={id} onClick={handleClick}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </button>
  );
};

export default Card;
