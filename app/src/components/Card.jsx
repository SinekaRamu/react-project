const Card = (props) => {
  const { item, handleEdit, handleDelete } = props;

  return (
    <li className="card">
      <p>{item.value}</p>
      <button onClick={() => handleEdit(item.id)}>Edit</button>
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </li>
  );
};

export default Card;
