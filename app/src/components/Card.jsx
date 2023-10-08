const Card = (props) => {
  const { item, handleDelete, handleEdit } = props;

  return (
    <li className="card" key={item.id}>
      <p>{item.value}</p>
      <button onClick={() => handleEdit(item.id)}>Edit</button>
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </li>
  );
};

export default Card;
